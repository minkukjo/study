module.exports = {
  mySidebar: [
    'intro',
    {
      type: 'category',
      label: 'Spring',
      items: [
        {
          type: 'category',
          label: 'JPA',
          items: [
            {
              type: 'autogenerated',
              dirName: 'spring/jpa'
            }
          ]
        },
        {
          type: 'category',
          label: 'Security',
          items: [
            {
              type: 'autogenerated',
              dirName: 'spring/security'
            }
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Code',
      items: [
        {
          type: 'category',
          label: '코드',
          items: [
            {
              type: 'autogenerated',
              dirName: 'code/refactoring'
            }
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Kubernetes',
      items: [
        {
          type: 'category',
          label: '15단계로 배우는 쿠버네티스',
          items: [
            {
              type: 'autogenerated',
              dirName: 'kubernetes/15steps'
            }
          ]
        },
        'kubernetes/node-isolation'
      ]
    },
    {
      type: 'category',
      label: 'Java',
      items: [
        {
          type: 'category',
          label: '이펙티브 자바',
          items: [
            {
              type: 'autogenerated',
              dirName: 'java/effective-java'
            }
          ]
        },
        'java/java-language-guide'
      ]
    },
    {
      type: 'category',
      label: 'Kotlin',
      items: ['kotlin/kotlin-language-guide']
    },
    {
      type: 'category',
      label: 'Kafka',
      items: [
        {
          type: 'category',
          label: '카프카 핵심 가이드',
          items: [
            {
              type: 'autogenerated',
              dirName: 'kafka/kafka-core-guide'
            }
          ]
        }
      ]
    }
  ]
}
