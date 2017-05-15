### 一、api一览  
* 用户  
userLogin  用户登录  
adduser  新增用户  
queryuser  查询用户  
removeuser  删除用户  
updateuser  更新用户  

* 角色  
addRole  创建角色  
updatePrivilegeForRole  更新角色的授权  
queryPrivilegeByRole  查询角色的权限  
queryUsersByRole  查询属于指定角色的用户列表  
addUsersToRole  添加一个或者多个用户到一个角色  
removeUserToRole  从指定角色中移除一个用户  

### 二、用户api详细说明  

#### 2.1 用户api  
* userLogin  用户登录  
请求类型：  
POST    
请求数据：  
{"uid":0,"pwd":"***"}    
响应数据：  
包括用户信息(不带有密码的用户信息)、用户的权限信息、授权的token。一个示例数据是这样：{"userinfo":{},"privilege":{},"token":""}    
* adduser(json jsonObjAddUser)  新增用户  
请求类型：POST  
请求数据：{}  
响应数据：
* queryuser(json jsonQueryUser)  查询用户  
请求类型：POST  
请求数据：  
响应数据：
* removeuser(int userid)  删除用户  
请求类型：POST  
请求数据：  
响应数据：
* updateuser(json jsonObjUpdateUser)  更新用户  
请求类型：POST  
请求数据：  
响应数据：

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
