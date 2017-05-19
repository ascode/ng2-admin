# API说明   
* 此文档中数据json中中括号，代表里面的对象有一个或者多个。
* 值为0，代表这个字段是一个数值类型
* 值为""，代表这个字段是一个字符串类型
* Is开头的字段，一般代表是否的意思，这种数据一般只有0，1两个值，0代表否，1代表是
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
```
{"uid":0,"pwd":"***"}    
```
参数说明：  

略   


响应数据：  
包括用户信息(不带有密码的用户信息)、用户的权限信息、授权的token。一个示例数据是这样：  
```
{
    "userinfo":{
        "id":0,
        "uniqueid":"",
        "login_name":"",
        "user_name":"",
        "Dir":"",
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
返回消息说明：  
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
                <td>Dir</td>
                <td>分类，由原Mes系统保留，暂时没用</td>
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

* adduser(json jsonObjAddUser)  新增用户  
请求类型：POST  
请求数据：
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
响应数据：
{
    
}
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
