# vue-demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

1.执行npm i -g @vue/cli-init
2.执行 npm config set registry https://registry.npm.taobao.org  （修改npm镜像，不然有些包下载不下来，速度很慢）
3.执行npm i
  目的：加载less包 这样就能在项目中使用less写样式更方便
  配置：添加了vue.config.js文件，该文件配置了less
2.全局样式变量
  在assets目录下添加了index.less文件,定义了项目的主题色，在其他样式文件中引用变量就行。（在main.js中引入了）
  定义变量 --primary-color: red;
  使用变量 .footer{
    background:var(--primary-color)
  }
3. 执行 npm i
4.进入项目目录 npm run serve

