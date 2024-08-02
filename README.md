# 简单的JavaScript音乐播放器

这是一个简单的音乐播放器，适合初学者入门，因为它不仅可以帮助你学习 JavaScript 和 HTML DOM，还可以帮助你了解如何使用浏览器内置的音频元素来实现音乐播放器的功能。


## 补全代码

当前代码是一个半成品，需要你在已有代码基础完成下方三处 `TODO` :

```
// TODO：暂停当前曲目
function pauseTrack() {
  // TODO 
}
```

```
// TODO：上一首
function prevTrack() {
  // 如果当前曲目不是第一首，则把当前曲目改为上一首
  // 如果当前曲目是第一首，则把当前曲目改为最后一首
  // 加载当前曲目
  // 播放当前曲目
}
```

```

// 更新音乐播放进度条和时间显示
function seekUpdate() {
  ...
  // TODO：格式化时间为 "mm:ss" 的形式    
  ...
}
```

## 进一步扩展功能

另外你可以在补全代码后，进一步扩展该音乐播放器功能，比如：
- 增加播放列表，支持自由切换音乐播放
- 添加播放模式（顺序播放、随机播放）
- 增加歌词显示，让用户可以看到正在播放的歌曲或者音频的歌词

## 完成作品并修改README文件

当你在完成半成品代码并添加新功能后，你可以对当前README进行修改，按照你自己的思路对外说明和介绍这个作品。

PS：README文件将在他人访问该代码空间详情页，或是通过你的个人编程主页访问该代码空间详情页时阅读到。如这个代码空间的详情页：https://1024code.com/codecubes/ymdPtHj


## 发布你的作品到社区

如果愿意的话，你可以考虑将作品发布到社区。这样可以让更多的人看到你的成果，并得到其他同学的反馈和建议，有助于你更快地提高编程技能。

发布操作演示：

![去发布](https://1024-staging-1258723534.cos.ap-guangzhou.myqcloud.com/assets/gotopublish.pic.jpg)

![发布](https://1024-staging-1258723534.cos.ap-guangzhou.myqcloud.com/assets/publish.png)


## Development Environment Setup

1. Ensure you are running on Ubuntu 20.04.6 LTS or a compatible environment.
2. Configuration file `.1024` is used to set up the environment.
3. Set `PORT=8080` and `HOST=0.0.0.0` in the `run_command` parameter in `.1024`.
4. Additional setup steps can be added here as needed.