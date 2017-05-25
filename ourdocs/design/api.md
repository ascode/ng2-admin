# API说明   
* 此文档中数据json中中括号，代表里面的对象有一个或者多个。
* 值为0，代表这个字段是一个数值类型
* 值为""，代表这个字段是一个字符串类型
* Is开头的字段，一般代表是否的意思，这种数据一般只有0，1两个值，0代表否，1代表是
### 一、api一览  
* 用户  
userLoginReq  用户登录  
adduserReq  新增用户  
queryuserReq  查询用户  
removeuserReq  删除用户  
updateuserReq  更新用户  

* 角色  
addRoleReq  创建角色  
queryRolesReq  查询角色列表  
updatePrivilegeForRoleReq  更新角色的授权  
queryPrivilegeByRoleReq  查询角色的权限  
queryUsersByRoleReq  查询属于指定角色的用户列表  
addUsersToRoleReq  添加一个或者多个用户到一个角色  
removeUserToRoleReq  从指定角色中移除一个用户  

* 机构  
queryDepartment  查询部门列表  


### 二、用户api详细说明  

#### 2.1 用户api  
##### 2.1.1 *userLoginReq  用户登录*  

* 请求类型：  
POST    

* 请求数据：  

```
{"uid":0,"pwd":"***"}    
```
* 参数说明：  

略   


* 响应数据：  

包括用户信息(不带有密码的用户信息)、用户的权限信息、授权的token。一个示例数据是这样：  
```
{
    "userinfo":{
        "id":0,
        "uniqueid":"",
        "login_name":"",
        "user_name":"",
        "department_unique_id":"",
        "ScanCode":"",
        "IsAllowLogin":0,
        "InValidTime":"",
        "IsEmployee":0,
        "DataStatus":"",
        "AbandonStatus":0,
        "Creator_uniqueid":"",
        "creator_name":"",
        "create_time":"",
        "last_updater_name":"",
        "last_updater_unique_id":"",
        "last_update_time":"",
        "approver_unique_id":"",
        "approver_name":"",
        "approve_time":"",
        "abandoner_unique_id":"",
        "abandoner_name":"",
        "abandon_time":"",
        "last_timestamp":0
    },
    "privilege":[{
        "module_name": "",
        "module_text": "",
        "culumns": [{
            "column_name": "",
            "column_text": "",
            "privilege_item": [
                { "privilege_item_name": "", "privilege_item_text": "" }
            ]
        }]
    }],
    "token":""
}    
```
* 返回消息说明：  
userinfo:  
<table>
        <thead>
            <tr>
                <th>字段</th>
                <th>说明</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>id</td>
                <td>逻辑主键，这个设计可能是便于观看</td>
            </tr>
            <tr>
                <td>uniqueid</td>
                <td>全局id，这是一个guid数据，用于主数据识别</td>
            </tr>
            <tr>
                <td>login_name</td>
                <td>用户登录名称</td>
            </tr>
            <tr>
                <td>user_name</td>
                <td>用户姓名</td>
            </tr>
            <tr>
                <td>department_unique_id</td>
                <td>部门全局唯一id</td>
            </tr>
            <tr>
                <td>Password</td>
                <td>用户登陆密码</td>
            </tr>
            <tr>
                <td>ScanCode</td>
                <td>扫描码</td>
            </tr>
            <tr>
                <td>IsAllowLogin</td>
                <td>是否允许登录</td>
            </tr>
            <tr>
                <td>InValidTime</td>
                <td>有效期</td>
            </tr>
            <tr>
                <td>IsEmployee</td>
                <td>是否是企业员工</td>
            </tr>
            <tr>
                <td>DataStatus</td>
                <td>数据状态:新建，已提交，已审核</td>
            </tr>
            <tr>
                <td>AbandonStatus</td>
                <td>禁用标记</td>
            </tr>
            <tr>
                <td>Creator_uniqueid</td>
                <td>创建人全局编号（ID）</td>
            </tr>
            <tr>
                <td>creator_name</td>
                <td>创建人名称，这是一个冗余字段，便于直观查看数据</td>
            </tr>
            <tr>
                <td>create_time</td>
                <td>创建人名称，这是一个冗余字段，便于直观查看数据</td>
            </tr>
            <tr>
                <td>last_updater_name</td>
                <td>最后一次修改人名称</td>
            </tr>
            <tr>
                <td>last_updater_unique_id</td>
                <td>最后一次修改人全局id</td>
            </tr>
            <tr>
                <td>last_update_time</td>
                <td>最后一次修改时间</td>
            </tr>
            <tr>
                <td>approver_unique_id</td>
                <td>审核人全局唯一id</td>
            </tr>
            <tr>
                <td>approver_name</td>
                <td>审核人名称</td>
            </tr>
            <tr>
                <td>approve_time</td>
                <td>审核时间</td>
            </tr>
            <tr>
                <td>abandoner_unique_id</td>
                <td>禁用人全局唯一id</td>
            </tr>
            <tr>
                <td>abandoner_name</td>
                <td>禁用人名称</td>
            </tr>
            <tr>
                <td>abandon_time</td>
                <td>禁用时间</td>
            </tr>
            <tr>
                <td>last_timestamp</td>
                <td>时间戳</td>
            </tr>
        </tbody>
    </table>
privilege:  
<table>
        <thead>
            <tr>
                <th>字段</th>
                <th>说明</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>module_name</td>
                <td>模块名称</td>
            </tr>
            <tr>
                <td>module_text</td>
                <td>模块显示的名称</td>
            </tr>
            <tr>
                <td>column_name</td>
                <td>栏目名称</td>
            </tr>
            <tr>
                <td>column_text</td>
                <td>栏目显示的名称</td>
            </tr>
            <tr>
                <td>privilege_item_name</td>
                <td>权限名称</td>
            </tr>
            <tr>
                <td>privilege_item_text</td>
                <td>权限显示的名称</td>
            </tr>
        </tbody>
    </table>

##### *2.1.2 adduserReq(json jsonObjAddUser)  新增用户*  
请求类型：POST  
请求数据：
```
{
    "login_name":"wangraoji",
    "user_name":"wangraoji",
    "Password":"123",
    "ScanCode":"kk00011",
    "IsEmployee":1,
    "IsAllowLogin":1,
    "InValidTime":"2017-01-02",
    "DataStatus":"新建",
    "Creator_uniqueid":"00001",
    "creator_name":"老王"
}  
```
响应数据：
{"ResponseStatus":{"ErrorCode":"String","Message":"String","StackTrace":"String","Errors":[{"ErrorCode":"String","FieldName":"String","Message":"String"}]},"DoFlag":false,"DoResult":"String"}

##### *2.1.3 queryuserReq(json jsonQueryUser)  查询用户*  
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

##### *2.1.4 removeuserReq*  

##### *2.1.5 updateuserReq*


#### 2.2 角色api  

##### *2.2.1 addRoleReq  创建角色*
请求类型：POST  
请求数据：
```
{
    "FCode":"角色编号",
    "FName":"角色名称",
    "desc":"角色描述",
    "data_status":"数据状态枚举字段，可选值：新建、提交、审核",
    "creator_uniqueid":"创建人全局唯一ID",
    "creator_name":"创建人名称",
    "create_time":"2017-12-12"
}  
```
响应数据：
{"ResponseStatus":{"ErrorCode":"String","Message":"String","StackTrace":"String","Errors":[{"ErrorCode":"String","FieldName":"String","Message":"String"}]},"DoFlag":false,"DoResult":"String"}  

##### *2.2.2 queryRolesReq  查询角色列表*  
请求类型：POST  
请求数据：  
```
{
    "pagesize":10,
    "current_page_index":1,
    "row_count":50,
    "query_entity":{
        "FName":"角色名称",
        "creator_name":"创建人名称"
    }
}
```
响应数据：  
```
[
    {
        "id":0,
        "unique_id":"unique_id",
        "FCode":"角色编号",
        "FName":"角色名称",
        "Dir":"角色分类",
        "desc":"角色描述",
        "creator_uniqueid":"创建人全局唯一ID",
        "creator_name":"创建人名称",
        "create_time":"2014-01-01",
        "updator_uniqueid":"最后更新人全局唯一ID",
        "updator_name":"最后更新人名称",
        "update_time":"最后更新时间",
        "submitter_uniqueid":"提交人全局唯一ID",
        "submitter_name":"提交人名称",
        "submit_time":"提交时间",
        "approver_uniqueid":"审核人名称",
        "approver_name":"审核人名称",
        "approver_time":"2014-01-10",
        "abandoner_uniqueid":"禁用人全局唯一ID",
        "abandoner_name":"禁用人名称",
        "abandon_time":"禁用时间",
        "data_status":"数据状态",
        "abandon_status":"禁用状态",
        "last_timestamp":"最后一次更新数据的时间戳"
    }
]
```
##### *2.2.3 updatePrivilegeForRoleReq  更新角色的授权*  
请求类型：POST  
请求数据：
```
{
    "role_unique_id":"0",
    "inserted_privileges":["新增用户","查看用户列表"],
    "deleted_privileges":["修改用户","删除用户"]
}  
```
响应数据：
```
{"ResponseStatus":{"ErrorCode":"String","Message":"String","StackTrace":"String","Errors":[{"ErrorCode":"String","FieldName":"String","Message":"String"}]},"DoFlag":false,"DoResult":"String"}  
```

##### *2.2.4 queryPrivilegeByRoleReq  查询角色的权限*  
请求类型：GET  
请求数据：  
?role_unique_id=0

响应数据：
点击查看 [privilege_model](../../resource/privilege_model.json)  

##### *2.2.5 queryUsersByRoleReq  查询属于指定角色的用户列表*  
请求类型：GET  
请求数据：  
?role_unique_id=0  

响应数据： 
``` 
[
    {"id":0,"unique_id":"用户的全局唯一ID","user_name":"用户名称"},
    {"id":0,"unique_id":"用户的全局唯一ID","user_name":"用户名称"}
]
```
##### *2.2.6 addUsersToRoleReq  添加一个或者多个用户到一个角色*  


##### *2.2.7 removeUserToRoleReq  从指定角色中移除一个用户*  

