## TCP 执行过程

```
1. client => 发送SYN尝试连接请求，seq = 0
2. server => 发送{SYN ACK}请求，seq = 0, ack = 1; 服务端尝试回复以及询问client端
3. client => 发送{ACK}请求，seq = 1; ack = 1; 表示双方建立连接成功

// 数据交换过程中，如果是发送请求就是seq ack保持上一次一致，上一次ack 作为seq，上一次的seq + len 作为这次的ack
4. client => 发送{PSH, ACK}请求，seq = 1; ack = 1; len = 14; 客户端向服务器端发送数据
5. server => 发送{ACK}请求，seq = 1; ack = 15; 服务器端进行回应
6. server => 发送{PSH, ACK}请求，seq = 1; ack = 15; len = 3; 服务器端向client端发送消息
7. client => 发送{ACK}请求，seq = 15; ack = 4; client进行回应
8. client => 发送{PSH, ACK}请求，seq = 15; ack = 4; len = 4; server向client发送消息
9. server => 发送{ACK}请求, seq = 4; ack = 19; len = 0; client回应

// 如果是关闭的话，如果是回应的话，上一次的ack作为seq，上一次的seq + 1 作为本次的ack
10. client => 发送{FIN, ACK}请求，seq = 19; ack = 4; len = 0; client向server发送消息尝试断开
11. server => 发送{ACK}请求，seq = 4; ack = 20; server回复
12. server => 发送{FIN, ACK}请求，seq = 4; ack = 20; 服务器端尝试断开
13. client => 发送{ACK}请求, seq = 20; ack = 5; len = 0; 断开成功
```
