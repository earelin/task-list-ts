export default {
  parallel: 2,
  format: ['progress-bar', ['html', 'reports/cucumber-report.html']],
  paths: ['acceptance-test/**/*.feature'],
  requiresModule: ['ts-node/register'],
  require: ['acceptance-test/step-definitions/**/*.ts'],
  tags: 'not @wip'
}
