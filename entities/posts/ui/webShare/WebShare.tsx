import React from 'react'
import { RWebShare } from 'react-web-share'
import styles from './WebShare.module.scss'

const WebShare: React.FC = (): JSX.Element => {
  const [url, setUrl] = React.useState<string>('')

  React.useEffect(() => {
    setUrl(window.location.href)
  }, [])

  return (
    <div className={styles.wrapper}>
      <RWebShare
        data={{
          text: 'Like humans, flamingos make friends for life',
          url: `${url}`,
          title: 'Share you url',
        }}
        sites={['facebook', 'twitter', 'whatsapp']}
        onClick={() => console.log('shared successfully!')}
      >
        <button className={styles.iconButton}>
          <svg
            fill='none'
            height='14'
            viewBox='0 0 14 14'
            width='14'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M4.43847 6.12342L1.71206 8.84984C1.25613 9.30576 1 9.92412 1 10.5689C1 10.8881 1.06288 11.2043 1.18506 11.4992C1.30723 11.7942 1.48631 12.0622 1.71206 12.2879C1.9378 12.5137 2.20581 12.6928 2.50076 12.8149C2.79572 12.9371 3.11185 13 3.43111 13C4.07588 13 4.69424 12.7439 5.15016 12.2879L7.87658 9.56153M9.59563 7.84247L12.3221 5.11605C12.7629 4.65707 13.0063 4.04353 12.9999 3.40713C12.9935 2.77074 12.7378 2.16222 12.2878 1.7122C11.8378 1.26218 11.2293 1.00653 10.5929 1.00012C9.95647 0.993719 9.34293 1.23707 8.88395 1.67795L6.15753 4.40437M4.43847 9.56153L9.59563 4.40437'
              stroke='#93949A'
              strokeWidth='1.06667'
            />
          </svg>
        </button>
      </RWebShare>
    </div>
  )
}

export default WebShare
