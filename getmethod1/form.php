<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<!-- 1- The GET method produces a long string that appears in your server logs, in the browser's Location: box.

2- The GET method is restricted to send upto 1024 characters only.

3- Never use GET method if you have password or other sensitive information to be sent to the server.

4- GET can't be used to send binary data, like images or word documents, to the server.

5- The data sent by GET method can be accessed using QUERY_STRING environment variable.

6- The PHP provides $_GET associative array to access all the sent information using GET method -->
    <form action="register.php" method="get">
    Name: <input type="text" name="name"><br>
    E-mail: <input type="text" name="email"><br>
    <input type="submit" name="submit">
    </form>
</body>
</html>