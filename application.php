<?php include 'config.php'; ?>
<!DOCTYPE html>
<html>
    <head>
        <title><?php echo $config['title'] . ' | دانلود اپلیکیشن'; ?></title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="description" content="<?php echo $config['description']; ?>"/>
        <meta name="keywords" content="<?php echo $config['keywords']; ?>"/>
        <meta name="viewport" content="width=device-width, maximum-scale=1.0">
        <link type="image/x-icon" rel="icon" href="css/favicon.ico"/>
        <link type="text/css" rel="stylesheet" href="css/application.css">
    </head>
    <body>
        <div class="set">
            <div class="header">
                <ul>
                    <li><a href="<?php echo $root; ?>">خانه</a></li>
                    <li><a href="<?php echo $root . '/application.php'; ?>">دانلود اپلیکیشن</a></li>
                    <li><a href="<?php echo $root . '/guide.php'; ?>">راهنما</a></li>
                    <li><a href="<?php echo $root . '/support.php'; ?>">پشتیبانی</a></li>
                </ul>
            </div>
            <div class="content">
                <div class="app-image">
                    <div id="logo-container">
                        <div id="logo">
                            <img class="application" alt="اپلیکیشن خرید شارژ و محصولات مجازی" src="<?php echo $root; ?>/img/Mobile-Charge-Application-Logo.png">
							<div class="title">
								<img class="application-logo" alt="لوگوی اپلیکیشن" src="https://www.chargereseller.com/img/mobile_app_logo/default.png">
								<span><?php echo substr($config['title'], 0, 25); ?></span>
							</div>
                        </div>
                    </div>
					<div class="clear"></div>
                </div>
                <div class="description explanations">
                    <ul>
                        <p>با دانلود نرم افزار موبایل ویژه گوشی های با سیستم عامل اندروید شما می توانید فرایند خرید انواع شارژ و
                            پرداخت قبوض مختلف خود را به سرعت و با امنیت بالا انجام دهید.</p>
                        <br>
                        <strong>برخی امکانات و قابلیت های این اپلیکیشن:</strong>
                        <li>خرید آسان کارت شارژ های ایرانسل، همراه اول، تالیا و رایتل</li>
                        <li>وارد کردن رمز شارژ فقط با یک کلیک</li>
                        <li>امکان شارژ اتوماتیک (تاپ آپ)</li>
                        <li>خرید گیفت کارت های گوگل پلی، آیتونز، مایکروسافت و ...</li>
                        <li>خرید آنتی ویروس</li>
                        <li>خرید بسته اینترنت ایرانسل</li>
                        <li>پرداخت قبوض آب، برق، گاز، تلفن ثابت، تلفن همراه، عوارض شهرداری</li>
                        <li>امکان استعلام آنلاین قبض سیم کارت دائمی همراه اول</li>
                        <li>مجهز به سیستم بارکدخوان جهت ورود اطلاعات سریع قبض</li>
                        <li>ذخیره اطلاعات شارژهای خریداری شده و قبض های پرداخت شده</li>
                        <li>دریافت اطلاعات تماس، یکبار برای همیشه</li>
                        <li>پرداخت وجه از طریق درگاه های بانکی مختلف</li>
                        <li>امکان موجودی گیری از سیم کارت با یک کلیک</li>
                    </ul>
                    <div class="application-deactive">اپلیکیشن موبایل برای این فروشگاه فعال نشده است.</div>
                    <div class="submit">
                        <input type="submit" value="دانلـــود اپلیکیشن">
                    </div>
                    <div class="qr">
                        <div class="description">
                            <p>نصب اپلیکیشن با کد QR</p>
                            برای نصب این برنامه، می‌توانید کد مقابل را با برنامه <a
                                    href="http://cafebazaar.ir/app/com.google.zxing.client.android/?l=fa" target="blank">Barcode
                                Scanner</a> و به وسیله‌ی دوربین موبایل خود اسکن کنید.
                        </div>
                        <div class="qrcode"></div>
                        <div class="clear"></div>
                    </div>
                </div>
				<div class="clear"></div>
            </div>
        </div>
        <script type="text/javascript">
            var webserviceId = "<?php echo $config['webserviceID'] ?>";
        </script>
        <script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
        <script type="text/javascript" src="js/jquery.qrcode-0.11.0.min.js"></script>
        <script type="text/javascript" src="js/application.js"></script>
    </body>
</html>