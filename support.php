<?php include 'config.php'; ?>
<!DOCTYPE html>
<html>
	<head>
		<title><?php echo $config['title'] . ' | پشتیبانی'; ?></title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="description" content="<?php echo $config['description']; ?>" />
		<meta name="keywords" content="<?php echo $config['keywords']; ?>" />
		<meta name="viewport" content="width=device-width, maximum-scale=1.0">
		<link type="image/x-icon" rel="icon" href="css/favicon.ico"/>
		<link type="text/css" rel="stylesheet" href="css/support.min.css">
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
				<section class="error">
					<div class="image"><img alt="پشتیبانی" src="img/support.png"></div>
					<p>در صورت بروز هرگونه اشکال و یا نیاز به راهنمائی می توانید با واحد پشتیبانی تماس حاصل فرمائید.</p>
					<p>
                        <strong>
                            شماره تلفن:
                            <span class="support-number"></span>
                        </strong></p>
					<p>پشتیبانی تلفنی شنبه تا چهارشنبه از ساعت 9 الی 17 پاسخگوی شماست.</p>
					<p>آدرس ایمیل:
                        <span class="support-mail"></span>
                    </p>
				</section>
			</div>
		</div>
        <script src="js/jquery-3.2.1.min.js"></script>
        <script src="js/support.min.js?v=1.0"></script>
    </body>
</html>