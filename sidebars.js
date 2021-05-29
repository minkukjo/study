module.exports = {
  main: [
    'intro',
    {
      type: 'category',
      label: 'Kubernetes',
      items: [
        {
          type: 'category',
          label: '15단계로 배우는 쿠버네티스',
          items: [
            'kubernetes/15steps/00-intro',
            'kubernetes/15steps/01-what-is-k8s',
            'kubernetes/15steps/02-what-is-container',
            'kubernetes/15steps/03-kubernetes-architecture',
            'kubernetes/15steps/04-docker-command'
          ]
        }
      ]
    }
  ]
}
