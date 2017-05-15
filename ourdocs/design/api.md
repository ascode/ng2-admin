### api列表  
* 用户  
adduser(json [jsonObjAddUser](#jsonObjAddUser))  新增用户  
queryuser(json [jsonQueryUser](#jsonQueryUser))  查询用户  
removeuser(int userid)  删除用户  
updateuser(json [jsonObjUpdateUser](#jsonObjUpdateUser))  更新用户  

### 用户api详细说明  

#### api  
adduser(json jsonObjAddUser)  新增用户  
queryuser(json jsonQueryUser)  查询用户  
removeuser(int userid)  删除用户  
updateuser(json jsonObjUpdateUser)  更新用户  

#### 数据说明  

* jsonObjAddUser
<span id="jsonObjAddUser" name="jsonObjAddUser"></span>
类型： json对象  
字段：  
```
编号	名称	字段类型
FName	姓名	字符串(50)
Dir	分类	字符串(50)
Password	密码	字符串(50)
ScanCode	扫描码	字符串(500)
Admin	系统管理员	布尔值
LogonUser	系统登录用户	布尔值
ErpUser	ERP用户	字符串(50)
ErpEmp	ERP员工	字符串(50)
UseErpPassword	使用ERP密码登录	布尔值
InValidTime	失效时间	日期+时间
DataStatus	数据状态	数值枚举
AbandonStatus	禁用标记	布尔值
Creator	创建人	字符串(50)
CreateTime	创建时间	日期+时间
Updator	修改人	字符串(50)
UpdateTime	修改时间	日期+时间
Submitter	提交人	字符串(50)
SubmitTime	提交时刻	日期+时间
Approver	审核人	字符串(50)
ApproveTime	审核时刻	日期+时间
Abandoner	禁用人	字符串(50)
AbandonTime	禁用时刻	日期+时间
```


* jsonQueryUser  
<span id="jsonQueryUser" name="jsonQueryUser"></span>
类型： json对象  
字段： 
``` 
FName	姓名	字符串(50)
AbandonStatus	禁用标记	布尔值
```

* userid  

* jsonObjUpdateUser  
<span id="jsonObjUpdateUser" name="jsonObjUpdateUser"></span>
