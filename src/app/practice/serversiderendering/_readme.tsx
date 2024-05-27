const Page = () => {
  return (
    <div>
      <h1 className="text-red-700">
        _のついたファイルはPrivate
        Folder(https://nextjs.org/docs/app/building-your-application/routing/colocation#private-folders)
        といって、そのフォルダ内のファイルは直接アクセスできないようになります。
        実際、`http://localhost:3000/practice/_readme`にアクセスすると404エラーが返ってきます。
      </h1>
      <p>
        Server Side Rendering is the process of rendering the initial view of a
        web page on the server and sending it to the browser. This allows the
        browser to display the content of the page before the JavaScript code is
        executed, which can improve the performance and SEO of the website.
      </p>
    </div>
  );
};
