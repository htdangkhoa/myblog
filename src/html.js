const bundleJS = process.env.NODE_ENV === 'production' ? './bundle.min.js' : './bundle.js';

export default ({ body, initialState = {} }) => `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Thỏa sức mua sắm qua mạng hàng ngàn mặt hàng sách, điện tử, đồ gia dụng, quà tặng, thời trang, làm đẹp & sức khỏe tại Tiki với giá rẻ hơn và khuyến mãi hấp dẫn">
        <title>MyBlog - Blog for dev</title>
        <link rel="canonical" href="https://662dcf7b.ngrok.io/">

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
        <script>window.__APP_INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>
    </head>
    <body>
      <div id="root">${body}</div>
    </body>
    <script src="${bundleJS}"></script>
</html>
`;
