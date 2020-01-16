# device-info-collector

接收 Flutter 发送到的硬件信息，保存于mysql数据库中。
信息由 [https://github.com/zhongshanguo/device_info_collect_package](https://github.com/zhongshanguo/device_info_collect_package) 此插件产生。

## Getting Started

- NodeJs环境略

- 准备数据库
    使用 device_info数据库，建立login_info数据表。建立表的文件: devince_info.sql

- 配置
    修改config.json中对应的项
        app_options.listen_port: Api接口使用的端口号
        db_options.*: 连接数据库所使用的认证与配置信息

