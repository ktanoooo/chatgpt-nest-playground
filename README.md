#

chatgpt 使ってみる

```sh
cp .env.sample .env
```

https://platform.openai.com/account/api-keys から apikey 作成して.env 書き換え

```sh
# ndoe v18.14.2
npm i
```

実行

```sh
npm run start:dev

curl 'http://localhost:3000/chatgpt' \
--header 'Content-Type: application/json' \
--data '{ "message": "お前のこと誰が好きなん？" }'

> [
>   {
>     index: 0,
>     message: { role: 'assistant', content: '私は人工知能であり、感情や好き嫌いを持つことはできません。' },
>     finish_reason: 'stop'
>   }
> ]
```
