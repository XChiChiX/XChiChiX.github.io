---
title: 好康的
date: 2022-02-05 23:53:09
---
## 學程式
<div class="linkpage">
    <ul id="friendsList1"></ul>
</div>

<script type="text/javascript">
{
    const flist = JSON.parse(`[
        {
        "name":"OI Wiki",
        "bio":"算法",
        "avatar":"https://raw.githubusercontent.com/XChiChiX/images/main/img/0-40-ema.png",
        "link":"https://oi-wiki.org/"},
        {
        "name":"Lucky貓",
        "bio":"UVA翻譯",
        "avatar":"https://raw.githubusercontent.com/XChiChiX/images/main/img/0-51-ema.png",
        "link":"http://web.kshs.kh.edu.tw/academy/luckycat/index.htm"},
        {
        "name":"演算法筆記",
        "bio":"算法",
        "avatar":"https://raw.githubusercontent.com/XChiChiX/images/main/img/0-62-ema.png",
        "link":"https://web.ntnu.edu.tw/~algo/"},
        {
        "name":"ZeroJudge",
        "bio":"刷題",
        "avatar":"https://raw.githubusercontent.com/XChiChiX/images/main/img/1-20-ema.png",
        "link":"https://zerojudge.tw/"},
        {
        "name":"YUI HUANG 演算法學習筆記",
        "bio":"CPE就靠它了",
        "avatar":"https://raw.githubusercontent.com/XChiChiX/images/main/img/1-48-ema.png",
        "link":"https://yuihuang.com/"},
        {
        "name":"UVA",
        "bio":"刷題都英文",
        "avatar":"https://raw.githubusercontent.com/XChiChiX/images/main/img/1-28-ema.png",
        "link":"https://onlinejudge.org/"},
        {
        "name":"LeetCode",
        "bio":"刷題都英文",
        "avatar":"https://raw.githubusercontent.com/XChiChiX/images/main/img/1-45-ema.png",
        "link":"https://leetcode.com/"},
        {
        "name":"小浩算法",
        "bio":"算法",
        "avatar":"https://raw.githubusercontent.com/XChiChiX/images/main/img/1-58-ema.png",
        "link":"https://www.geekxh.com/0.0.%E5%AD%A6%E4%B9%A0%E9%A1%BB%E7%9F%A5/01.html"}
    ]`);
    let friendNodes = '';
    while (flist.length > 0) {
        const rndNum = Math.floor(Math.random()*flist.length);
        friendNodes += `<li><a target="_blank" href="${flist[rndNum].link}"><img src="${flist[rndNum].avatar || '<%- url_cdn("images/avatar.webp") %>'}"><h4>${flist[rndNum].name}</h4><p>${flist[rndNum].bio || ''}</p></a></li>`;
        flist.splice(rndNum, 1);
    }
    document.getElementById("friendsList1").innerHTML = friendNodes;
}
</script>

## 學日文

<div class="linkpage">
    <ul id="friendsList2"></ul>
</div>

<script type="text/javascript">
{
    const flist = JSON.parse(`[
        {
        "name":"時雨の町",
        "bio":"學日文",
        "avatar":"https://raw.githubusercontent.com/XChiChiX/images/main/img/0-6-ema.png",
        "link":"https://www.sigure.tw/"},
        {
        "name":"音速日語",
        "bio":"音速學日文",
        "avatar":"https://raw.githubusercontent.com/XChiChiX/images/main/img/0-5-ema.png",
        "link":"https://jp.sonic-learning.com/2020/02/11/tsukau/"}
    ]`);
    let friendNodes = '';
    while (flist.length > 0) {
        const rndNum = Math.floor(Math.random()*flist.length);
        friendNodes += `<li><a target="_blank" href="${flist[rndNum].link}"><img src="${flist[rndNum].avatar || '<%- url_cdn("images/avatar.webp") %>'}"><h4>${flist[rndNum].name}</h4><p>${flist[rndNum].bio || ''}</p></a></li>`;
        flist.splice(rndNum, 1);
    }
    document.getElementById("friendsList2").innerHTML = friendNodes;
}
</script>

## 其他

<div class="linkpage">
    <ul id="friendsList3"></ul>
</div>

<script type="text/javascript">
{
    const flist = JSON.parse(`[
        {
        "name":"巴哈姆特",
        "bio":"嗯",
        "avatar":"https://raw.githubusercontent.com/XChiChiX/images/main/img/0-29-ema.png",
        "link":"https://forum.gamer.com.tw/"},
        {
        "name":"動畫瘋",
        "bio":"看動漫",
        "avatar":"https://raw.githubusercontent.com/XChiChiX/images/main/img/0-17-ema.png",
        "link":"https://ani.gamer.com.tw/"}
    ]`);
    let friendNodes = '';
    while (flist.length > 0) {
        const rndNum = Math.floor(Math.random()*flist.length);
        friendNodes += `<li><a target="_blank" href="${flist[rndNum].link}"><img src="${flist[rndNum].avatar || '<%- url_cdn("images/avatar.webp") %>'}"><h4>${flist[rndNum].name}</h4><p>${flist[rndNum].bio || ''}</p></a></li>`;
        flist.splice(rndNum, 1);
    }
    document.getElementById("friendsList3").innerHTML = friendNodes;
}
</script>