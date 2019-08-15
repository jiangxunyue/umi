import ConfigManager from './ui/index';

/*
const ConfigManager = connect(state => ({
  config: state.config,
}))(
  Form.create()(props => {
    const { getFieldDecorator } = props.form;
    const config = props.config.data;

    function onChange(name, value) {
      window.send('config', ['set', name, `${value.target ? value.target.value : value}`]);
    }

    return (
      <div>
        <h2>Basic</h2>
        <FormItem {...formItemLayout} label="history" help="除非知道为什么，否则不要配置为 memory">
          {getFieldDecorator('history', {
            initialValue: config.history || 'browser',
          })(
            <Select style={{ width: 160 }} onChange={onChange.bind(null, 'history')}>
              <Option value="hash">hash</Option>
              <Option value="browser">browser</Option>
              <Option value="memory">memory</Option>
            </Select>,
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="publicPath"
          help="指定 webpack 的 publicPath 配置，部署静态文件到非根目录时需要配置"
        >
          {getFieldDecorator('publicPath', {
            initialValue: config.publicPath || '/',
          })(<Input style={{ width: 160 }} onBlur={onChange.bind(null, 'publicPath')} />)}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="base"
          help="指定路由的 base 路径，部署到非根目录时需要配置"
        >
          {getFieldDecorator('base', {
            initialValue: config.base || '/',
          })(<Input style={{ width: 160 }} onBlur={onChange.bind(null, 'base')} />)}
        </FormItem>
        <FormItem {...formItemLayout} label="outputPath" help="指定构建产物输出路径">
          {getFieldDecorator('outputPath', {
            initialValue: config.outputPath || './dist',
          })(<Input style={{ width: 160 }} onBlur={onChange.bind(null, 'outputPath')} />)}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="runtimePublicPath"
          help="启用运行时 publicPath，对 JavaScript 有效"
        >
          {getFieldDecorator('runtimePublicPath', {
            valuePropName: 'checked',
            initialValue: config.runtimePublicPath,
          })(<Switch onChange={onChange.bind(null, 'runtimePublicPath')} />)}
        </FormItem>
        <FormItem {...formItemLayout} label="hash" help="指定输出文件是否带上 hash 后缀">
          {getFieldDecorator('hash', {
            valuePropName: 'checked',
            initialValue: config.hash,
          })(<Switch onChange={onChange.bind(null, 'hash')} />)}
        </FormItem>
        <FormItem {...formItemLayout} label="mountElementId" help="指定页面根节点元素">
          {getFieldDecorator('mountElementId', {
            initialValue: config.mountElementId || 'root',
          })(<Input style={{ width: 160 }} onBlur={onChange.bind(null, 'mountElementId')} />)}
        </FormItem>
        <h2>Targets</h2>
        <h2>Plugins</h2>
        <h2>Webpack</h2>
        <ul>
          {Object.keys(props.config.data).map(key => (
            <ConfigItem key={key} name={key} data={props.config.data[key]} />
          ))}
        </ul>
      </div>
    );
  }),
);
 */

export default (api: IUiApi) => {
  const { callRemote, getContext, TwoColumnPanel, getLocale } = api;

  api.addPanel({
    title: '配置管理',
    path: '/configuration',
    icon: 'environment',
    component: () => <ConfigManager api={api} />,
  });
};