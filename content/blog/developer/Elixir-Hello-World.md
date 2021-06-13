+++
title = "Elixir Hello World"
description = "A little hello world Elixir example to test Zola's (the static site generator I am using) Syntax highlighting and code block styling"
date = 2021-06-12
[extra]
banner = "elixir-hello-world.jpg"

+++
Since I am working on learning Elixir and this blog site needed a way to test the code blocks syntax highlighting and styling I figured I may as well combine the two. Below is some example code from the elixir docs as well as the output! <br><br>

###### Code 
```Elixir 
hello = "hello "
world = "world"

IO.puts(hello <> world)

defmodule Math do
  def sum(a, b) do
    do_sum(a, b)
  end

  defp do_sum(a, b) do
    a + b
  end
end

IO.puts Math.sum(1, 2)

```
<br><br>

###### Result

```Elixir 
$elixir main.exs
hello world
3
```
