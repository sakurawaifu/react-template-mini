# react 简单模板

## 简介
* editorconfig + eslint + stylelint + commitlint
* css modules + less

## 修改内容
在 vite 默认 react 模板的基础上：
1. 增加 editorconfig
2. 修改 eslint，增加 stylelint + commitlint
3. husky + lint-staged
4. 样式方案更改为 css modules + less
5. 增加 autoprefixer
6. 修改 index.html、main.tsx、App.tsx
7. 增加 changelog 生成功能

## workflow
1. change
2. commit
3. 更新 package.json 的 version
4. 更新 changelog
5. commit package.json和CHANGELOG.md，msg 内容为 release: 发布 x.y.z 版本
6. tag
7. push
