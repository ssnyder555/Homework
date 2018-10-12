<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title></title>
  <link rel="stylesheet" href="/css/app.css">
</head>

<body>
  <h1>edit classroom</h1>

  <form method="POST" action="/objects/<%=id%>?_method=PUT">

    Name: <input type="text" name="name" value="<%=objects.name%>"/><br/>

            Age: <input type="text" name="age" value="<%=objects.age%>"/><br/>

            Numbers:
    <input type="checkbox" name="numbers"
              value="<%=objects.numbers%>"/><br/>

    <% } %>


    <input type="submit" name="" value="Submit Changes"/>
        </form>
</body>

</html>
