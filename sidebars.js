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
            'kubernetes/15steps/04-docker-command',
            'kubernetes/15steps/05-docker-deeper',
            'kubernetes/15steps/06-dockerfile',
            'kubernetes/15steps/07-container-network',
            'kubernetes/15steps/08-container-api',
            'kubernetes/15steps/09-kubernetes-first-step',
            'kubernetes/15steps/10-manifest',
            'kubernetes/15steps/11-service',
            'kubernetes/15steps/12-ingress',
            'kubernetes/15steps/13-deplyoment',
            'kubernetes/15steps/14-statefulset',
            'kubernetes/15steps/15-autoscale',
            'kubernetes/15steps/16-ingress-deeper',
            'kubernetes/15steps/17-storage',
            'kubernetes/15steps/18-job'
          ]
        }
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
            'java/effective-java/01-intro',
            'java/effective-java/02-object-create-destroy',
            'java/effective-java/03-public-method',
            'java/effective-java/04-class-interface',
            'java/effective-java/05-generic',
            'java/effective-java/06-enum-annotation',
            'java/effective-java/07-lambda-stream'
          ]
        }
      ]
    }
  ]
}
