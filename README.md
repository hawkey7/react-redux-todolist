1.设计数据结构state的构成:
 {
	todos:[{text:'',id:'',completed:''}],
	filter:'all',
}

2.actiontype的设计

3.引入actiontype 写出 action.js

4.写出功能对应的reducer

5.在store.js中combine功能reducer 

6.在主目录index.js下面引入store和provider,构建context数据流

7.构建App.js , 其中引入两个功能组件 Filter 和 Todos ,

8.分别构建Filter和Todos 组件的view文件 , 引入connect ,让傻瓜组件接受context流, 使用mapStateToProps接受数据 , 使用mapDispatchToProps来发出action(需要提前引入action.js) ,

9.注意:为了保证模块化的导入和导出,所有子模块对外导出的文件统一为index.js , 将view和reducer导出




happy hack!!!!!
