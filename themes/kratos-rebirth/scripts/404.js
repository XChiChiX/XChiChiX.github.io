// 生成404页面
hexo.extend.generator.register('notfoundPage', function(locals){
    return {
        path: '404.html',
        data: {
            type: '404',
            title: '這個頁面走丟了呢…'
        },
        layout: '_pages/404'
    };
});