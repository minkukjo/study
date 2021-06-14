import React from 'react'
import clsx from 'clsx'
import styles from './HomepageFeatures.module.css'

const FeatureList = [
  {
    title: 'Kakao i 계정 개발',
    Svg: require('../../static/img/iam_logo.svg').default,
    description: (
      <>
        B2B, B2C를 아우르는 통합형 계정 서비스<br></br> Kakao i 계정 개발
      </>
    )
  },
  {
    title: '도전하는 개발자',
    Svg: require('../../static/img/developer_logo.svg').default,
    description: <>매일 매일 새로운 것들에 도전하고 노력하는 개발자</>
  },
  {
    title: 'CKA',
    Svg: require('../../static/img/cka_logo_fixed.svg').default,
    description: (
      <>
        공인 쿠버네티스 자격증<br></br>CKA 자격증 취득
      </>
    )
  }
]

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
