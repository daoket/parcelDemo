# parcelProject
利用parcel搭建的项目demo

## 使用方法
1. 下载项目
`git clone https://github.com/daoket/parcelDemo.git`
2. 全局安装parcel
`npm install -g parcel-bundler`
3. 进入parcelDemo,安装依赖
`npm install`
4. 运行项目
`npm run dev`
5. 打包项目
`npm run build`

## 相对webpack优点
1. 配置简单，几乎不需要配置
2. 打包速度快，一般2，3秒即可
3. 实时打包，不需要反复build

## 几个注意点
1. 因为babel-preset-env不支持async/await等es7语法，所以增加了babel-runtime包，可根据个人需要删除
2. 建议使用import方式导入CSS，如果使用link标签导入，通过background-url引入的图片无法被识别
3. 因为公司打包的文件需要压缩后才能上传服务器，所以自己手写一个压缩打包后文件的插件，[parcel-plugin-zip](https://github.com/daoket/parcel-plugin-zip)，欢迎使用。

欢迎star