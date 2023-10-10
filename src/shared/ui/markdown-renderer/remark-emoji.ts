// noinspection NonAsciiCharacters

import emojiRegex from 'emoji-regex'
import { gemoji } from 'gemoji'
import type { Root, RootContent } from 'mdast'
import { findAndReplace, Replace } from 'mdast-util-find-and-replace'

const skintoneMap: Record<string, string> = {
  '🏻': 'skin tone 2',
  '🏼': 'skin tone 3',
  '🏽': 'skin tone 4',
  '🏾': 'skin tone 5',
  '🏿': 'skin tone 6',
}

function stripSkintone(emoji: string) {
  const skintoneRegex = new RegExp(Object.keys(skintoneMap).join('|'), 'g')
  const genericEmoji = emoji.replace(skintoneRegex, '')

  let skintone: string | undefined | null | RegExpMatchArray =
    emoji.match(skintoneRegex)
  skintone = skintone && skintone[0] ? skintone[0] : undefined

  return { skintone, genericEmoji }
}

function emojiToName(emoji: string) {
  return gemoji.find((item) => item.emoji === emoji)
}

function getEmojiDescription(emoji: string) {
  const { skintone, genericEmoji } = stripSkintone(emoji)

  let info = emojiToName(genericEmoji)

  if (!info) {
    const appleEmoji = genericEmoji + '\uFE0F'
    info = emojiToName(appleEmoji)

    if (!info) {
      return ''
    }
  }

  const skintoneDescription = skintone ? skintoneMap[skintone] : ''

  return skintoneDescription
    ? `${info.description} (${skintoneDescription})`
    : info.description
}

function a11yEmoji() {
  function replace(match: any) {
    return {
      type: 'text',
      value: match,
      data: {
        hName: 'span',
        hProperties: {
          role: 'img',
          ariaLabel: getEmojiDescription(match),
          style: { fontWeight: 'normal' },
        },
        hChildren: [{ type: 'text', value: match }],
      },
    }
  }

  function transform(markdownAST: RootContent | Root) {
    findAndReplace(markdownAST, [emojiRegex(), replace as Replace])
    return markdownAST
  }

  return transform
}

// eslint-disable-next-line import/no-default-export
export default a11yEmoji
