//用以styled-components 全局颜色变量
const LESS_VARIABLES =  {
  'primaryColor': '#32b67a', // 全局主色
  'linkColor': '#32b67a', // 链接色
  'successColor': '#32b67a', // 成功色
  'warningColor': '#faad14', // 警告色
  'errorColor': '#f5222d', // 错误色
  'fontSizeBase': '14px',  // 主字号
  'headingColor': 'rgba(0, 0, 0, 0.85)', // 标题色
  'textColor': 'rgba(0, 0, 0, 0.65)', // 主文本色
  'textColorSecondary': 'rgba(0, 0, 0, .45)', //// 次文本色
  'disabledColor': 'rgba(0, 0, 0, .25)', // 失效色
  'border-radiusBase': '4px', // 组件/浮层圆角
  'borderColorBase': '#d9d9d9', // 边框色
  'boxShadowBase': '0 1px 10px rgba(0, 0, 0, 0.2)' // 浮层阴影
}
//修改antd主题色
const lessVariables =  {
  'primary-color': '#32b67a', // 全局主色
  'link-color': '#32b67a', // 链接色
  'success-color': '#32b67a', // 成功色
  'warning-color': '#faad14', // 警告色
  'error-color': '#f5222d', // 错误色
  'fontSizeBase': '14px',  // 主字号
  'heading-color': 'rgba(0, 0, 0, 0.85)', // 标题色
  'text-color': 'rgba(0, 0, 0, 0.65)', // 主文本色
  'text-color-secondary': 'rgba(0, 0, 0, .45)', //// 次文本色
  'disabled-color': 'rgba(0, 0, 0, .25)', // 失效色
  'border-radiusBase': '4px', // 组件/浮层圆角
  'border-colorBase': '#d9d9d9', // 边框色
  'boxS-shadow-base': '0 1px 5px rgba(0, 0, 0, 0.15)' // 浮层阴影
}
module.exports = { LESS_VARIABLES, lessVariables }