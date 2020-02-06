# app

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

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 封装组件思路以及使用
【1】：在components的文件下面创建一个Tabbar文件夹，所有的tabbar有关的。vue结尾的都在这里面，外部想使用直接引入到app.vue中即可
【2】：最底部一个大的div使用了一个组件，下面的四个div使用了另一个组件，采用slot（插槽）的方式进行渲染，切记----在引入的组件中想要加入你想要的标签一定要设置slot，否则内容不显示。
【3】：图片的替换在publicTabbar组件中，也可以传入你想要文字的颜色，例如：tabbarColor：“blue”

组件的封装已经完成！
