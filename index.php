<?php include 'config.php'; ?>
<!DOCTYPE html>
<html>
	<head>
		<title><?php echo $config['title']; ?></title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="description" content="<?php echo $config['description']; ?>" />
		<meta name="keywords" content="<?php echo $config['keywords']; ?>" />
		<meta name="viewport" content="width=device-width, maximum-scale=1.0">
		<link type="image/x-icon" rel="icon" href="css/favicon.ico"/>
		<link type="text/css" rel="stylesheet" href="css/jquery.qtip.min.css" />
		<link type="text/css" rel="stylesheet" href="css/default.min.css">
		<link type="text/css" rel="stylesheet" href="css/sweetalert2.css">
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
		<div class="slider"><img alt="خرید شارژ مستقیم و کارت شارژ و محصولات مجازی" src="img/baner.jpg"></div>
		<div class="menu">
				<div data-type="TopUp"><section><img alt="خرید شارژ مستقیم" src="img/direct.png"><p>شارژ مستقیم</p></section></div>
				<div data-type="PIN"><section><img alt="خرید کارت شارژ" src="img/card.png"><p>کارت شارژ</p></section></div>
                <div data-type="InternetPackage"><section><img alt="خرید بسته اینترنتی" src="img/internet-package.png"><p>بسته اینترنت</p></section></div>
                <div data-type="bill-payment"><section><img alt="پرداخت قبض" src="img/bill.png"><p>پرداخت قبض</p></section></div>
				<div data-type="giftcard"><section><img alt="خرید گیفت کارت" src="img/giftcard.png"><p>گیفت کارت</p></section></div>
				<div data-type="antivirus"><section><img alt="خرید آنتی ویروس" src="img/antivirus.png"><p>آنتی ویروس</p></section></div>
				<section class="clear"></section>
		</div>
		<div class="content">
			<div class="bargain">
				<section class="topup">
					<div>
						<div class="operator active MTN" data-type="MTN" data-name="ایرانسل"></div>
						<div class="operator MCI" data-type="MCI" data-name="همراه اول"></div>
						<div class="operator Rightel" data-type="RTL" data-name="رایتل"></div>
					</div>
					<div class="charge-type-container">
						<section>
							<label class="charge-type" data-price="1000">
								<input type="radio" name="radio-topup" class="charge-button" checked="checked" value="1000"></input>
								<p>1000 تومانی</p>
							</label>
						</section>
						<section>
							<label class="charge-type" data-price="2000">
								<input type="radio" name="radio-topup" class="charge-button"  value="2000"></input>
								<p>2000 تومانی</p>
							</label>
						</section>
						<section>
							<label class="charge-type" data-price="5000">
								<input type="radio" name="radio-topup" class="charge-button"  value="5000"></input>
								<p>5000 تومانی</p>
							</label>
						</section>
						<section>
							<label class="charge-type" data-price="10000">
								<input type="radio" name="radio-topup" class="charge-button"  value="10000"></input>
								<p>10000 تومانی</p>
							</label>
						</section>
						<section>
							<label class="charge-type" data-price="20000">
								<input type="radio" name="radio-topup" class="charge-button" value="20000"></input>
								<p>20000 تومانی</p>
							</label>
						</section>
					</div>
					<div class="magiccharge">
						<input value="1" id="magiccharge" name="data[Magic]" type="checkbox" class="checkbox">
						<label for="magiccharge">شارژ شگفت انگیز</label> 
					</div>
					<div class="nonecredit-mtn">
						<input value="1" id="nonecredit-mtn" name="data[NonCreditMTN]" type="checkbox" class="checkbox">
						<label for="nonecredit-mtn">قبض (شارژ) دائمی ایرانسل</label>
					</div>
					<div class="wimax">
						<input value="wimax" id="wimax" name="data[wimax]" type="checkbox" class="checkbox">
						<label for="wimax">شارژ وایمکس</label>
					</div>
				</section>
				<section class="pin">
					<div>
						<div class="operator active MTN" data-type="MTN" data-name="ایرانسل"></div>
						<div class="operator MCI" data-type="MCI" data-name="همراه اول"></div>
						<div class="operator Rightel" data-type="RTL" data-name="رایتل"></div>
					</div>
					<div class="charge-type-container">
						<section>
							<label class="charge-type" data-price="1000">
								<input type="radio" name="radio-topup" class="charge-button" data-price="1000"></input>
								<p>1000 تومانی</p>
							</label>
						</section>
						<section>
							<label class="charge-type" data-price="2000">
								<input type="radio" name="radio-topup" class="charge-button"  data-price="2000"></input>
								<p>2000 تومانی</p>
							</label>
						</section>
						<section>
							<label class="charge-type" data-price="5000">
								<input type="radio" name="radio-topup" class="charge-button"  data-price="5000"></input>
								<p>5000 تومانی</p>
							</label>
						</section>
						<section>
							<label class="charge-type" data-price="10000">
								<input type="radio" name="radio-topup" class="charge-button"  data-price="10000"></input>
								<p>10000 تومانی</p>
							</label>
						</section>
						<section>
							<label class="charge-type" data-price="20000">
								<input type="radio" name="radio-topup" class="charge-button" data-price="20000"></input>
								<p>20000 تومانی</p>
							</label>
						</section>
					</div>
					<div class="pin-counter">
						<div class="increase"></div>
						<input class="counter" value="1">
						<div class="decrease"></div>
					</div>
				</section>
				<section class="internet-package">
					<div>
						<div class="operator active MTN" data-type="MTN" data-name="ایرانسل"></div>
                        <div class="operator MCI" data-type="MCI" data-name="همراه اول"></div>
                        <div class="operator Rightel" data-type="RTL" data-name="رایتل"></div>
					</div>
                    <div class="sim-type">
                        <div class="clear"></div>
                    </div>
                    <select>
						<option class="IN-MTN-Hourly" data-package-type="IN-MTN-Hourly">ساعتی</option>
					</select>
					<div class="package">
						
					</div>
				</section>
				<section class="bill-payment">
					<p>شناسه قبض:</p>
					<div class="hint-bill">شناسه قبض را وارد کنید</div>
					<input id="BillId" class="bill-id" type="text" maxlength="13" placeholder="شناسه قبض را وارد کنید"></input>
					
					<p>شناسه پرداخت:</p>
					<div class="hint-pay">شناسه پرداخت را وارد کنید</div>
					<input id="PaymentId" class="bill-id" type="text" maxlength="13" placeholder="شناسه پرداخت را وارد کنید"></input>
					<div class="bill-check">
						<input id ="CheckBill" class="check" type="button" value="بررسی"></input>
					</div>
				</section>
				<section class="giftcard">
					<div>
						<div class="giftcard-types active iTunes" data-giftcard-type="iTunes" data-name="آیتونز"></div>
						<div class="giftcard-types GooglePlay" data-giftcard-type="GooglePlay" data-name="گوگل پلی"></div>
						<div class="giftcard-types XBox" data-giftcard-type="XBox" data-name="ایکس باکس"></div>
						<div class="giftcard-types Amazon" data-giftcard-type="Amazon" data-name="آمازون"></div>
						<div class="giftcard-types PlayStation" data-giftcard-type="PlayStation" data-name="پلی استیشن"></div>
						<div class="giftcard-types Steam" data-giftcard-type="Steam" data-name="استیم"></div>
						<div class="giftcard-types Spotify" data-giftcard-type="Spotify" data-name="اسپاتیفای"></div>
						<div class="giftcard-types PlayStationPlus" data-giftcard-type="PlayStationPlus" data-name="پلی استیشن پلاس"></div>
						<div class="giftcard-types Microsoft" data-giftcard-type="Microsoft" data-name="مایکروسافت"></div>
						<div class="giftcard-types Skype" data-giftcard-type="Skype" data-name="اسکایپ"></div>
					</div>
					<div class="list">
						
					</div>
					<div class="clear"></div>
					<div class="pin-counter">
						<div class="increase"></div>
						<input class="counter" value="1">
						<div class="decrease"></div>
					</div>
				</section>
				
				<section class="antivirus">
					<div>
						<div class="antivirus-types active eset" data-antivirus-type="Eset" data-name="ایست اسمارت"></div>
						<div class="antivirus-types bitdefender" data-antivirus-type="BitDefender" data-name="بیت دفندر"></div>
						<div class="antivirus-types kaspersky" data-antivirus-type="Kaspersky" data-name="کاسپراسکای"></div>
						<div class="antivirus-types norton" data-antivirus-type="Norton" data-name="نورتون"></div>
						<div class="antivirus-types mcafee" data-antivirus-type="McAfee" data-name="مک کافی"></div>
						<div class="antivirus-types avira" data-antivirus-type="Avira" data-name="اویرا"></div>
						<div class="antivirus-types avg" data-antivirus-type="AVG" data-name="ای وی جی"></div>
						<div class="antivirus-types avast" data-antivirus-type="Avast" data-name="آوست"></div>
					</div>
					<div class="list">
						
					</div>
					<div class="clear"></div>
					<div class="pin-counter">
						<div class="increase"></div>
						<input class="counter" value="1">
						<div class="decrease"></div>
					</div>
				</section>
				
				
				
				
				
			</div>
			<div class="info">
				<div class="information">
					<div class="hint-cell"><p>شماره موبایل وارد شده صحیح نیست.</p></div>
					<div class="cellphone">
						<p>شماره موبایل:</p>
						<input id="CellphoneInput" name="phoneNumber" class="cellphone" type="text" maxlength="11" placeholder="شماره موبایل مورد نظر خود را وارد کنید.">
						<div class="clear"></div>
					</div>
					<div class="hint-mail"><p>ایمیل وارد شده صحیح نیست.</p></div>
					<div class="mail">
						<p>آدرس ایمیل:</p>
						<input id="EmailInput" name="email" class="email" type="email" placeholder="ایمیل مورد نظر خود را وارد کنید. (اختیاری)">
						<div class="clear"></div>
					</div>
					<div class="save">
						<label>
							<input type="checkbox" name="checkbox" class="save-information">
							<p class="save-info">ذخیره اطلاعات تماس</p>
							<div class="clear"></div>
						</label>
					</div>
					<div class="clear"></div>
				</div>
				<div class="pay-part">
					<div class="invoice">
						<div class="topup pin giftcard antivirus">
							<h3>صورتحساب</h3>
							<ul>
								<li><span>نوع:</span>&nbsp <p id="product-type"></p></li>
								<li><span>مبلغ:</span>&nbsp <p id="product-price"></p></li>
								<li><span>تعداد:</span>&nbsp <p id="product-count">1 عدد</p></li>
								<li><span>جمع کل:</span>&nbsp <p id="final-price"></p></li>
							</ul>
						</div>
						<div class="bill-payment">
							<h3>صورتحساب</h3>
							<ul>
								<li><span>نوع قبض:</span>&nbsp <section class="product-type"></section></li>
								<li><span>مبلغ قبض:</span>&nbsp <p class="final-price"></p></li>
							</ul>
						</div>
						<div class="internet-package">
							<h2>صورتحساب</h2>
							<ul>
								<li><span>نوع بسته:</span>&nbsp <p id="package-name"></p></li>
								<li><span>مبلغ بسته:</span>&nbsp <p id="package-price"></p></li>
							</ul>
						</div>
					</div>
					<div class="payment">
						<div class="gateways-container">
							<div class="gateway mellat" data-gateway-type="Mellat"></div>
							<div class="gateway saman" data-gateway-type="Saman"></div>
                            <div class="gateway emtiaz" data-gateway-type="Emtiyaz" data-tooltip="امتیاز"></div>
                            <div class="gateway zarrinpal" data-gateway-type="Zarinpal"></div>
							<div class="gateway parsian" data-gateway-type="Parsian"></div>
							<div class="gateway melli" data-gateway-type="Melli"></div>
							<div class="gateway fanava" data-gateway-type="Fanava"></div>
							<div class="clear"></div>
						</div>
						<p>خرید با کلیه کارت های بانکی عضو شبکه شتاب امکان پذیر می باشد.</p>
						<div class="payment-button">
							<input class="submit" type="submit" value="پرداخــت"></input>
						</div>
					</div>
					<div class="clear"></div>
				</div>
			</div>
			<div class="clear"></div>
		</div>
		<div class="clear"></div>
		<div class="sticky-menu">
			<a href="<?php echo $root . '/support.php'; ?>"><div class="support">پشتیبانی</div></a>
			<a href="<?php echo $root . '/guide.php'; ?>"><div class="help">راهنما</div></a>
		</div>
		
		
		
		
		<form id="myForm" method="post">
			<input type="text" name="data[type]" id="dataType" value="">
			<input type="text" name="data[ChargeKind]" id="dataChargeKind" value=""></input>
			<input type="text" name="data[amount]" id="dataAmount" value="1000">
			<input type="text" name="data[count]" id="dataCount" value="1">
			<input type="text" name="data[cellphone]" id="dataCellphone" value="">
			<input type="text" name="data[email]" id="dataEmail" value="">
			<input type="text" name="data[packageId]" id="dataPackageId" value="">
			<input type="text" name="data[billId]" id="dataBillId" value="">
			<input type="text" name="data[paymentId]" id="dataPaymentId" value="">
			<input type="text" name="data[productId]" id="dataProductId" value="">
			<input type="text" name="data[isTarabord]" id="dataIsTarabord" value="">
			<input type="text" name="data[webserviceId]" id="dataWebserviceId" value="<?php echo $config['webserviceID']; ?>">
			<input type="text" name="data[redirectUrl]" id="dataRedirectUrl" value="<?php echo $root . '/verify.php'; ?>">
			<input type="text" name="data[issuer]" id="dataIssuer" value="">
			<input type="hidden" name="data[paymentDetails]" value="true">
			<input type="text" name="data[redirectToPage]"  value="true">
			<input type="text" name="data[scriptVersion]"  value="Script-metro-1.3">
			<input type="text" name="data[firstOutputType]"  value="json">
			<input type="text" name="data[secondOutputType]"  value="get">
		</form>
		<script src="js/jquery-3.2.1.min.js"></script>
		<script src="js/jquery.cookie.min.js"></script>
		<script type='text/javascript' src='js/jquery.qtip.min.js'></script>
		<script type='text/javascript' src='js/sweetalert2.js'></script>
		<script src="js/script.min.js"></script>
		<script type="text/javascript" src="https://cdn.zarinpal.com/zarinak/v1/checkout.js"></script>
	</div>
	<div class="load">
		<section>
			<img alt="در حال بارگذاری" src="img/load.gif">
			<p>در حال بارگذاری</p>
		</section>
		<section class="hide">
			<p></p>
			<button class="return">بازگشت</button>
		</section>
	</div>
	</body>
</html>