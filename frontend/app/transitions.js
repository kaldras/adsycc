export default function() {
  this.transition(
    this.fromRoute(['login', 'login.password-reset']),
    this.toRoute(['login.password-reset', 'login']),
    this.use(
      'explode',
      {
        pickOld: '.login-form-user',
        pickNew: '.login-form-user',

        use: 'fly-to'
      },
      {
        pickOld: '.btn-link',
        pickNew: '.btn-link',

        use: 'fly-to'
      },
      {
        pickOld: '.btn-primary',
        pickNew: '.btn-primary',

        use: 'fly-to'
      },
      {
        pickNew: '.login-form-password',
        pickOld: '.login-form-password',

        use: 'fade'
      }
    )
  )

  this.transition(
    this.fromRoute('login.new-password'),
    this.toRoute('login'),
    this.use(
      'explode',
      {
        pickOld: '.btn-link',
        pickNew: '.btn-link',

        use: 'fly-to'
      },
      {
        pickOld: 'p',

        use: 'fade'
      }
    )
  )

  this.transition(
    this.fromRoute(route => route.endsWith('loading')),
    this.use('crossFade')
  )

  this.transition(this.fromRoute('login'), this.use('fade'))
}
