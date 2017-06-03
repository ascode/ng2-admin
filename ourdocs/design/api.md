# API说明   

### 约定  
* 此文档中数据json中中括号，代表里面的对象有一个或者多个。
* 值为0，代表这个字段是一个数值类型
* 值为""，代表这个字段是一个字符串类型
* Is开头的字段，一般代表是否的意思，这种数据一般只有0，1两个值，0代表否，1代表是   
* pr_开头的字段，（Performance Redundance Design）性能冗余设计，主要用在数据库字段设计，表示这个字段是处于性能考虑设计的冗余。
* sr_开头的字段，(solidify Redundance Design) 固化冗余设计，主要用于在数据库字段设计，表示这个字段是处于保留历史数据的角度做的冗余设计。比如单据引用产品数据，但是产品名称有可能变更，所以就将产品名称也放在单据的详细信息表。那么这样一来，即使产品表中产品名称变化了，我们的历史单据依然可以具有下单时间的产品名称。  

### 特征、风格  
分页数据请求常用结构：  
```
{
    "pagesize":10,
    "current_page_index":1,
    "query_entity":{

    }
}  
```
分页数据响应常用结构：   
```
{
    "pagesize":10,
    "current_page_index":1,
    "row_count":50,
    "result_data":[{

    }]
}
```



<a id="menu" name="menu"></a>

### 一、api一览  
* 用户  

[userLoginReq](#userLoginReq)  用户登录  
[adduserReq](#adduserReq)  新增用户  
[queryusersReq](#queryusersReq)  查询用户列表  
[queryuserByUniqueidReq](#queryuserByUniqueidReq)  根据指定的用户全局ID查询用户信息    
[removeuserReq](#removeuserReq)  删除用户  
[updateuserReq](#updateuserReq)  更新用户  

* 角色  

[addRoleInfoReq](#addRoleInfoReq)  创建角色  
[updateRoleInfoReq](#updateRoleInfoReq)  更新角色信息  
[queryRolesReq](#queryRolesReq)  查询角色列表  
[updatePrivilegeForRoleReq](#updatePrivilegeForRoleReq)  更新角色的授权  
[queryPrivilegeByRoleReq](#queryPrivilegeByRoleReq)  查询角色的权限  
[queryUsersByRoleReq](#queryUsersByRoleReq)  查询属于指定角色的用户列表  
[updateUsersToRoleReq](#updateUsersToRoleReq)  更新属于指定角色的用户列表  

* 机构  

[queryDepartment](#queryDepartment)  查询部门树  
[queryaDepartmentInfoByUniqueID](#queryaDepartmentInfoByUniqueID)  根据部门全局ID查询部门信息  
[createDepartment](#createDepartment)  新增部门  
[deleteDepartment](#deleteDepartment)  删除部门  

* 数据权限  

[queryDataPrivelegeOfRole](#queryDataPrivelegeOfRole) 查询某角色的数据权限列表  
[queryDataPrivelegeOfUser](#queryDataPrivelegeOfUser) 查询某人员的数据权限列表  
[updateDataPrivelegeOfRoleOfAview](#updateDataPrivelegeOfRoleOfAview) 更新某角色的数据权限列表  

[updateDataPrivelegeOfUserOfAview](#updateDataPrivelegeOfUserOfAview) 更新某人员的数据权限列表  

* 权限报表  

[queryPrivilegeReportForUser](#queryPrivilegeReportForUser) 查询某用户的权限报表数据  

* 日志

[queryLogOfUserLogin](#queryLogOfUserLogin)获取用户的登陆/登出日志  
[queryLogOfUserLoginException](#queryLogOfUserLoginException)获取用户登录异常的日志  
[queryLogOfUserOperation](#queryLogOfUserOperation)获取用户操作日志  
[queryLogOfUserOperationException](#queryLogOfUserOperationException)获取用户异常操作日志  


### 二、用户api详细说明  

#### 2.1 用户api  

<a id="userLoginReq" name="userLoginReq"></a>

##### 2.1.1 *userLoginReq  用户登录*  [目录](#menu)  

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

<a id="adduserReq" name="adduserReq"></a>

##### *2.1.2 adduserReq(json jsonObjAddUser)  新增用户*  [目录](#menu)  
请求类型：POST  
请求数据：
```
{
    "login_name":"wangraoji",
    "user_name":"wangraoji",
    "pwd":"123",
    "ScanCode":"kk00011",
    "IsEmployee":1,
    "IsAllowLogin":1,
    "InValidTime":"2017-01-02",
    "DataStatus":"新建",
    "Creator_uniqueid":"00001",
    "prd_creator_name":"老王"
}  
```
响应数据：
{"ResponseStatus":{"ErrorCode":"String","Message":"String","StackTrace":"String","Errors":[{"ErrorCode":"String","FieldName":"String","Message":"String"}]},"DoFlag":false,"DoResult":"String"}

<a id="queryusersReq" name="queryusersReq"></a>

##### *2.1.3 queryusersReq  查询用户列表*  [目录](#menu)    
请求类型：POST  
请求数据：  
```
{
    "pagesize":10,
    "current_page_index":1,
    "query_entity":{
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
}  
```
响应数据：  
{
    "pagesize":10,
    "current_page_index":1,
    "row_count":50,
    "result_data":[{
        "id":0,
        "uniqueid":"用户的全局ID",
        "login_name":"用户登录名",
        "user_name":"用户姓名",
        "department_unique_id":"部门的全局ID",
        "prd_department_name":"性能冗余，部门名称",
        "ScanCode":"扫描码",
        "IsAllowLogin":0,
        "InValidTime":"",
        "IsEmployee":0,
        "DataStatus":"数据状态:新建;已提交;已审核",
        "AbandonStatus":0,
        "Creator_uniqueid":"创建人全局编号（ID）",
        "prd_creator_name":"创建人名称，这是一个冗余字段，便于直观查看数据",
        "create_time":"",
        "last_updater_name":"最后一次修改人名称",
        "last_updater_unique_id":"最后一次修改人全局id",
        "last_update_time":"",
        "approver_unique_id":"",
        "approver_name":"",
        "approve_time":"",
        "abandoner_unique_id":"",
        "abandoner_name":"",
        "abandon_time":"",
        "last_timestamp":0
    }]
}

<a id="queryuserByUniqueidReq" name="queryuserByUniqueidReq"></a>

##### *2.1.4 queryuserByUniqueidReq  根据指定的用户全局ID查询用户信息*   [目录](#menu)   
请求类型：GET  
请求数据：  
?user_unique_id=0
响应数据：  
```
{
    "id":0,
    "uniqueid":"用户的全局ID",
    "login_name":"用户登录名",
    "user_name":"用户姓名",
    "department_unique_id":"部门的全局ID",
    "prd_department_name":"性能冗余，部门名称",
    "ScanCode":"扫描码",
    "IsAllowLogin":0,
    "InValidTime":"",
    "IsEmployee":0,
    "DataStatus":"数据状态:新建;已提交;已审核",
    "AbandonStatus":0,
    "Creator_uniqueid":"创建人全局编号（ID）",
    "prd_creator_name":"创建人名称，这是一个冗余字段，便于直观查看数据",
    "create_time":"",
    "last_updater_name":"最后一次修改人名称",
    "last_updater_unique_id":"最后一次修改人全局id",
    "last_update_time":"",
    "approver_unique_id":"",
    "approver_name":"",
    "approve_time":"",
    "abandoner_unique_id":"",
    "abandoner_name":"",
    "abandon_time":"",
    "last_timestamp":0
}
```

<a id="removeuserReq" name="removeuserReq"></a>

##### *2.1.5 removeuserReq 删除用户*  [目录](#menu)    
请求类型：GET  
请求数据：  
?user_unique_id=0  
响应数据：  
```
{"ResponseStatus":{"ErrorCode":"String","Message":"String","StackTrace":"String","Errors":[{"ErrorCode":"String","FieldName":"String","Message":"String"}]},"DoFlag":false,"DoResult":"String"}  
```

<a id="updateuserReq" name="updateuserReq"></a>

##### *2.1.6 updateuserReq 更新用户*  [目录](#menu)  
请求类型：POST  
请求数据：  
```
{
    "id":1,
    "uniqueid":"用户的全局ID",
    "login_name":"用户登录名",
    "user_name":"用户姓名",
    "department_unique_id":"部门的全局ID",
    "prd_department_name":"性能冗余，部门名称",
    "ScanCode":"扫描码",
    "IsAllowLogin":0,
    "InValidTime":"",
    "IsEmployee":0,
    "DataStatus":"数据状态:新建;已提交;已审核",
    "AbandonStatus":0,
    "Creator_uniqueid":"创建人全局编号（ID）",
    "prd_creator_name":"创建人名称，这是一个冗余字段，便于直观查看数据",
    "create_time":"",
    "last_updater_name":"最后一次修改人名称",
    "last_updater_unique_id":"最后一次修改人全局id",
    "last_update_time":"",
    "approver_unique_id":"",
    "approver_name":"",
    "approve_time":"",
    "abandoner_unique_id":"",
    "abandoner_name":"",
    "abandon_time":""
}
```
响应数据：
```
{"ResponseStatus":{"ErrorCode":"String","Message":"String","StackTrace":"String","Errors":[{"ErrorCode":"String","FieldName":"String","Message":"String"}]},"DoFlag":false,"DoResult":"String"}  
```


#### 2.2 角色api  

<a id="addRoleInfoReq" name="addRoleInfoReq"></a>

##### *2.2.1 addRoleInfoReq  创建角色*  [目录](#menu)  
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

<a id="updateRoleInfoReq" name="updateRoleInfoReq"></a>

##### *2.2.2 updateRoleInfoReq  更新角色信息*  [目录](#menu)  
请求类型：POST  
请求数据：
```
{
    "id":1,
    "unique_id":"xxx13242323",
    "FCode":"角色编号",
    "FName":"角色名称",
    "role_desc":"角色描述",
    "updator_uniqueid":"xx82793428",
    "updator_name":"金飞",
    "update_time":"2015-12-12",
    "data_status":"数据状态枚举字段，可选值：新建、提交、审核",
    "abandon_status":0,
}  
```
响应数据：
{"ResponseStatus":{"ErrorCode":"String","Message":"String","StackTrace":"String","Errors":[{"ErrorCode":"String","FieldName":"String","Message":"String"}]},"DoFlag":false,"DoResult":"String"}  

<a id="queryRolesReq" name="queryRolesReq"></a>

##### *2.2.3 queryRolesReq  查询角色列表*  [目录](#menu)    
请求类型：POST  
请求数据：  
```
{
    "pagesize":10,
    "current_page_index":1,
    "query_entity":{
        "FName":"角色名称",
        "creator_name":"创建人名称"
    }
}
```
响应数据：  
```
{
    "pagesize":10,
    "current_page_index":1,
    "row_count":50,
    "result_data":[
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
}
```
<a id="updatePrivilegeForRoleReq" name="updatePrivilegeForRoleReq"></a>

##### *2.2.4 updatePrivilegeForRoleReq  更新角色的授权*  [目录](#menu)    
请求类型：POST  
请求数据：
```
{
	"inserted_privileges": [{
	        "Role_uniqueid":"角色的全局ID",
	        "Privilege_code":"权限code",
	        "Prd_privilege_text":"权限的显示名称"
	}],
	"deleted_privileges": [{
	        "Role_uniqueid":"角色的全局ID",
	        "Privilege_code":"权限code",
	        "Prd_privilege_text":"权限的显示名称"
	}]
}
```
响应数据：
```
{
  "ResponseStatus": {},
  "DoFlag": true
}
```

<a id="queryPrivilegeByRoleReq" name="queryPrivilegeByRoleReq"></a>

##### *2.2.5 queryPrivilegeByRoleReq  查询角色的权限*  [目录](#menu)    
请求类型：GET  
请求数据：  
?role_unique_id=0

响应数据：
点击查看 [privilege_model](../../resource/privilege_model.json)  

<a id="queryUsersByRoleReq" name="queryUsersByRoleReq"></a>

##### *2.2.6 queryUsersByRoleReq  查询属于指定角色的用户列表*  [目录](#menu)    
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

<a id="updateUsersToRoleReq" name="updateUsersToRoleReq"></a>

##### *2.2.7 updateUsersToRoleReq  更新属于指定角色的用户列表*  [目录](#menu)    
请求类型：POST  
请求数据：  
```
{
    "role_uniqueid":"角色的全局唯一ID",
    "user_list_of_role":[
        {"id":0,"unique_id":"用户的全局唯一ID","user_name":"用户名称"},
        {"id":0,"unique_id":"用户的全局唯一ID","user_name":"用户名称"}
    ]
}
```  

响应数据： 
``` 
{"ResponseStatus":{"ErrorCode":"String","Message":"String","StackTrace":"String","Errors":[{"ErrorCode":"String","FieldName":"String","Message":"String"}]},"DoFlag":false,"DoResult":"String"}  
```



#### 2.3 机构api  

<a id="queryDepartment" name="queryDepartment"></a>

##### *2.3.1 queryDepartment  查询部门树*  [目录](#menu)    
请求类型：GET  
请求数据：  
?userid=0  
响应数据：  
```
{
    "id":0
    "organization_uniqueid":"唯一ID",
    "organization_code":"部门编码",
    "name":"部门名称",
    "brief_name":"部门简称",
    "description":"部门描述",
    "mnemonic_code":"助记码",
    "manager_uniqueid":"负责人全局ID",
    "prd_manager_name":"负责人名称",
    "parent_organization_uniqueid":"上级部门全局ID",
    "parent_organization_name":"上级部门名称",
    "remark":"备注",
    "data_status":"数据状态",
    "abandon_status":"禁用状态",
    "creator_uniqueid":"创建人的全局ID",
    "prd_creator_name":"创建人名称",
    "create_time":"2017-12-12",
    "updator":"",
    "update_time":"",
    "submitter":"",
    "submit_time":"",
    "approver":"",
    "approve_time":"",
    "abandoner":"",
    "abandon_time":"",
    "last_timestamp":4123442342,
    "childs":[
        {
            "id":0
            "organization_uniqueid":"唯一ID",
            "organization_code":"部门编码",
            "name":"部门名称",
            "brief_name":"部门简称",
            "description":"部门描述",
            "mnemonic_code":"助记码",
            "manager_uniqueid":"负责人全局ID",
            "prd_manager_name":"负责人名称",
            "parent_organization_uniqueid":"上级部门全局ID",
            "parent_organization_name":"上级部门名称",
            "remark":"备注",
            "data_status":"数据状态",
            "abandon_status":"禁用状态",
            "creator_uniqueid":"创建人的全局ID",
            "prd_creator_name":"创建人名称",
            "create_time":"2017-12-12",
            "updator":"",
            "update_time":"",
            "submitter":"",
            "submit_time":"",
            "approver":"",
            "approve_time":"",
            "abandoner":"",
            "abandon_time":"",
            "last_timestamp":4123442342,
            "childs":[]
        }
    ]
}
```
<a id="queryaDepartmentInfoByUniqueID" name="queryaDepartmentInfoByUniqueID"></a>

##### *2.3.2 queryaDepartmentInfoByUniqueID  根据部门全局ID查询部门信息*  [目录](#menu)    
请求类型：GET  
请求数据：  
?department_uniqueid=0  
响应数据： 
```
{
    "id":0
    "organization_uniqueid":"唯一ID",
    "organization_code":"部门编码",
    "name":"部门名称",
    "brief_name":"部门简称",
    "description":"部门描述",
    "mnemonic_code":"助记码",
    "manager_uniqueid":"负责人全局ID",
    "prd_manager_name":"负责人名称",
    "parent_organization_uniqueid":"上级部门全局ID",
    "parent_organization_name":"上级部门名称",
    "remark":"备注",
    "data_status":"数据状态",
    "abandon_status":"禁用状态",
    "creator_uniqueid":"创建人的全局ID",
    "prd_creator_name":"创建人名称",
    "create_time":"2017-12-12",
    "updator":"",
    "update_time":"",
    "submitter":"",
    "submit_time":"",
    "approver":"",
    "approve_time":"",
    "abandoner":"",
    "abandon_time":"",
    "last_timestamp":4123442342
}
```
<a id="createDepartment" name="createDepartment"></a>

##### *2.3.3 createDepartment  新增部门*  [目录](#menu)     
请求类型：POST  
请求数据： 
``` 
{
    "organization_uniqueid":"唯一ID",
    "organization_code":"部门编码",
    "name":"部门名称",
    "brief_name":"部门简称",
    "description":"部门描述",
    "mnemonic_code":"助记码",
    "manager_uniqueid":"负责人全局ID",
    "prd_manager_name":"负责人名称",
    "parent_organization_uniqueid":"上级部门全局ID",
    "parent_organization_name":"上级部门名称",
    "remark":"备注",
    "data_status":"数据状态",
    "abandon_status":"禁用状态",
    "creator_uniqueid":"创建人的全局ID",
    "prd_creator_name":"创建人名称",
    "create_time":"2017-12-12"
}  
```
响应数据： 
```
{"ResponseStatus":{"ErrorCode":"String","Message":"String","StackTrace":"String","Errors":[{"ErrorCode":"String","FieldName":"String","Message":"String"}]},"DoFlag":false,"DoResult":"String"}  
```
<a id="deleteDepartment" name="deleteDepartment"></a> 

##### *2.3.4 deleteDepartment  删除部门* [目录](#menu)    
请求类型：GET  
请求数据： 
?department_uniqueid=0
响应数据： 
```
{"ResponseStatus":{"ErrorCode":"String","Message":"String","StackTrace":"String","Errors":[{"ErrorCode":"String","FieldName":"String","Message":"String"}]},"DoFlag":false,"DoResult":"String"}  
```


#### 2.4 数据权限  

<a id="queryDataPrivelegeOfRole" name="queryDataPrivelegeOfRole"></a> 

##### *2.4.1 queryDataPrivelegeOfRole  查询某角色的数据权限列表* [目录](#menu)    
请求类型：POST   
请求数据：  
```
{
    "pagesize":10,
    "current_page_index":1,
    "query_entity":{
        "role_uniqueid":0,
        "data_view_name":"数据视图名称",
        "columns_of_view":"视图字段列表",
        "authorize_columns":"授权的字段列表",
        "authorize_desc":"授权说明"
    }
}  
```
响应数据：   
```
{
    "pagesize":10,
    "current_page_index":1,
    "row_count":50,
    "result_data":[{
        "id":0,
        "data_view_id":0,
        "data_view_name":"数据视图名称",
        "columns_of_view":"视图字段列表",
        "authorize_columns":"授权的字段列表",
        "authorize_desc":"授权说明"
    }]
}
```

<a id="queryDataPrivelegeOfUser" name="queryDataPrivelegeOfUser"></a> 

##### *2.4.2 queryDataPrivelegeOfUser  查询某人员的数据权限列表* [目录](#menu)    
请求类型：POST   
请求数据：  
```
{
    "pagesize":10,
    "current_page_index":1,
    "query_entity":{
        "user_uniqueid":0,
        "data_view_name":"数据视图名称",
        "columns_of_view":"视图字段列表",
        "authorize_columns":"授权的字段列表",
        "authorize_desc":"授权说明"
    }
}  
```
响应数据：   
```
{
    "pagesize":10,
    "current_page_index":1,
    "row_count":50,
    "result_data":[{
        "id":0,
        "data_view_id":0,
        "data_view_name":"数据视图名称",
        "columns_of_view":"视图字段列表",
        "authorize_columns":"授权的字段列表",
        "authorize_desc":"授权说明"
    }]
}
```

<a id="updateDataPrivelegeOfRoleOfAview" name="updateDataPrivelegeOfRoleOfAview"></a> 

##### *2.4.3 updateDataPrivelegeOfRoleOfAview  更新某角色的数据权限列表* [目录](#menu)    

请求类型：POST   
请求数据：  
```
{
    "id":0,
    "role_uniqueid":"02342343vd",
    "prd_role_name":"角色名称",
    "data_view_id":"数据视图id",
    "prd_data_view_name":"数据视图名称",
    "authorize_columns":"授权的字段列表",
    "authorize_desc":"授权说明",
}  
```
响应数据：   
```
{"ResponseStatus":{"ErrorCode":"String","Message":"String","StackTrace":"String","Errors":[{"ErrorCode":"String","FieldName":"String","Message":"String"}]},"DoFlag":false,"DoResult":"String"}  
```

<a id="updateDataPrivelegeOfUserOfAview" name="updateDataPrivelegeOfUserOfAview"></a> 

##### *2.4.4 updateDataPrivelegeOfUserOfAview  更新某人员的数据权限列表* [目录](#menu)    

请求类型：POST   
请求数据：  
```
{
    "id":0,
    "user_uniqueid":"02342343vd",
    "prd_user_name":"角色名称",
    "data_view_id":"数据视图id",
    "prd_data_view_name":"数据视图名称",
    "authorize_columns":"授权的字段列表",
    "authorize_desc":"授权说明",
}  
```
响应数据：   
```
{"ResponseStatus":{"ErrorCode":"String","Message":"String","StackTrace":"String","Errors":[{"ErrorCode":"String","FieldName":"String","Message":"String"}]},"DoFlag":false,"DoResult":"String"}  
```



#### 2.4 权限报表  

<a id="queryPrivilegeReportForUser" name="queryPrivilegeReportForUser"></a> 

##### *2.5.1 queryPrivilegeReportForUser  查询某用户的权限报表数据* [目录](#menu)   

请求类型：POST  
请求数据：  
?user_uniqueid=0  
响应数据：   
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
    "function_privilege":[{
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
    "data_privilege":{

    }
}

#### 2.4 日志  

<a id="queryLogOfUserLogin" name="queryLogOfUserLogin"></a> 

##### *2.5.1 queryLogOfUserLogin  获取用户的登陆/登出日志* [目录](#menu)   

请求类型：POST  
请求数据： 
```
{
    "pagesize":10,
    "current_page_index":1,
    "query_entity":{
        "prd_user_name":"用户名称",
        "login_time":"登录时间",
        "login_type":"枚举（登录、登出）",
        "event_level":"事件级别：正常、异常",
        "device_info":"登录/登出的设备信息"
    }
}  
```
响应数据：   
```
{
    "pagesize":10,
    "current_page_index":1,
    "row_count":50,
    "result_data":[{
        "id":0,
        "user_unique_id":"用户全局ID",
        "prd_user_name":"用户名称",
        "token":"tokentokentokentoken",
        "login_time":"登录时间",
        "login_type":"枚举（登录、登出）",
        "device_info":"登录/登出的设备信息",
        "event_level":"事件级别：正常、异常",
        "exception_desc":"异常信息描述",
        "last_timestamp":"234234124"
    }]
}
```



<a id="queryLogOfUserLoginException" name="queryLogOfUserLoginException"></a> 

##### *2.5.1 queryLogOfUserLoginException  获取用户登录异常的日志* [目录](#menu)  

请求类型：POST  
请求数据： 
```
{
    "pagesize":10,
    "current_page_index":1,
    "query_entity":{
        "prd_user_name":"用户名称",
        "login_time":"登录时间",
        "login_type":"枚举（登录、登出）",
        "device_info":"登录/登出的设备信息",
        "event_level":"事件级别：正常、异常",
        "exception_desc":"异常信息描述"
    }
}  
```
响应数据：   
```
{
    "pagesize":10,
    "current_page_index":1,
    "row_count":50,
    "result_data":[{
        "id":0,
        "user_unique_id":"用户全局ID",
        "prd_user_name":"用户名称",
        "token":"tokentokentokentoken",
        "login_time":"登录时间",
        "login_type":"枚举（登录、登出）",
        "device_info":"登录/登出的设备信息",
        "event_level":"事件级别：正常、异常",
        "exception_desc":"异常信息描述",
        "last_timestamp":"234234124"
    }]
}
``` 


<a id="queryLogOfUserOperation" name="queryLogOfUserOperation"></a> 

##### *2.5.1 queryLogOfUserOperation  获取用户操作日志* [目录](#menu)   

请求类型：POST  
请求数据： 
```
{
    "pagesize":10,
    "current_page_index":1,
    "query_entity":{
        "prd_user_name":"用户名称",
        "column_path":"栏目路径",
        "operation_name":"操作名称",
        "operation_desc":"操作描述",
        "event_level":"事件级别：正常、异常"
    }
}  
```
响应数据：   
```
{
    "pagesize":10,
    "current_page_index":1,
    "row_count":50,
    "result_data":[{
        "id":"",
        "user_unique_id":"用户唯一ID",
        "prd_user_name":"用户名称",
        "column_path":"栏目路径",
        "operation_name":"操作名称",
        "operation_desc":"操作描述",
        "exception_desc":"异常信息描述",
        "event_level":"事件级别：正常、异常",
        "last_timestamp":49564494
    }]
}
``` 


<a id="queryLogOfUserOperationException" name="queryLogOfUserOperationException"></a> 

##### *2.5.1 queryLogOfUserOperationException  获取用户异常操作日志* [目录](#menu)   

请求类型：POST  
请求数据： 
```
{
    "pagesize":10,
    "current_page_index":1,
    "query_entity":{
        "prd_user_name":"用户名称",
        "column_path":"栏目路径",
        "operation_name":"操作名称",
        "operation_desc":"操作描述"
    }
}  
```
响应数据：   
```
{
    "pagesize":10,
    "current_page_index":1,
    "row_count":50,
    "result_data":[{
        "id":"",
        "user_unique_id":"用户唯一ID",
        "prd_user_name":"用户名称",
        "column_path":"栏目路径",
        "operation_name":"操作名称",
        "operation_desc":"操作描述",
        "exception_desc":"异常信息描述",
        "event_level":"事件级别：正常、异常",
        "last_timestamp":49564494
    }]
}
``` 
