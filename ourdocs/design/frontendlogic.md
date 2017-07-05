# 前端处理逻辑说明  

### 目录
[用户登录](#userLogin)  
[超级用户](#superUser)  
[用户权限的实现](#userPrivilege)  


<a id="userLogin" name="userLogin"></a>

### 用户登录

* 1. 从界面获取用户输入的用户名、密码
* 2. 使用userLoginReq  api进行用户身份验证
* 3. 在客户端浏览器中存储用户信息、用户权限信息、用户会话信息：userinfo、privilege、token
* 4.1 验证成功，跳转到deshboard
* 4.2 验证不成功，提示登录失败，提示语：“用户名或者密码错误，请重试！”

<a id="superUser" name="superUser"></a>

### 超级用户

1. 定义一个判断是否为超级用户的服务类，这个服务提供一个方法判断用户是否为超级用户。
2. 所有判定用户权限的地方，加入是否是超级用户的判断，目前全部功能对超级用户放行。

超级用户的判断根据框架研发进展按需进行升级：
* 阶段一： 直接默认用户登录名为root的账户为超级用户


<a id="userPrivilege" name="userPrivilege"></a>

### 用户权限的实现

#### 相关设计： 
文件/resource/privilege_model.json里面定义了权限模板数据
privilege_item_name、column_name、module_name定义了权限标签

如下代码段就是调用了登录验证接口之后获得的权限数据。
```
"privilege":[
            {
            "Id": 4,
            "Role_uniqueid": "角色全局ID",
            "Privilege_code": "权限code",
            "Prd_privilege_text": "权限的显示名称",
            "Create_time": "创建时间",
            "Is_deleted": true,
            "Last_timestamp": "AAAAAAAACN0="
            }
        ],
```

权限是一个树状结构，示意如下：
```
模块
|-栏目
    |-权限项
```

用户登录接口userLoginReq（api）返回的privilege里面是权限树状结构中的叶子节点的子集。数据中Privilege_code对应我们/resource/privilege_model.json文件中的privilege_item_name，是字符串类型。

privilege_item_name字符串的构成为：“class名称.方法名称”。

#### 用户权限的实现：
1. 在权限模板数据/resource/privilege_model.json里面的所有privilege_item_name指定的方法中都需要判断用户是否具备功能权限，判断方法为用户登录获取到的privilege的数据集合中是否存在Privilege_code = 对应功能的privilege_item_name。

2. 根据用户是否在某个模块或者栏目下具有功能权限决定用户的菜单是否显示，具体判断方法为，只要栏目下面没有任何功能权限，那么栏目这一级的菜单就不显示，只要模块下面没有任何栏目可以显示就不显示这个模块。

