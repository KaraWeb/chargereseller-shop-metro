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
		<link type="text/css" rel="stylesheet" href="css/verify.min.css">
	</head>
	<body>
		<div class="set">
			<div class="header">
				<ul>
					<li><a href="<?php echo $root . '/index.php'; ?>">خانه</a></li>
                    <li><a href="<?php echo $root . '/application.php'; ?>">دانلود اپلیکیشن</a></li>
					<li><a href="<?php echo $root . '/guide.php'; ?>">راهنما</a></li>
					<li><a href="<?php echo $root . '/support.php'; ?>">پشتیبانی</a></li>
				</ul>
			</div>
			<div class="content">
			
			 <?php
					$result = base64_decode(urldecode(htmlspecialchars($_GET['data'])));
					$result = json_decode($result, true);
					
					if ($result['status'] == 'Success') {
						$transactionType = explode('-', $result['products']['type']);
						$transactionType = $transactionType[0];
						if ($transactionType == 'Bill') {
                            $billTypesPersian = array("آب", "بــرق", "گـــاز", "تلفن ثابت", "تلفن همراه", "عوارض شهرداری","","", "جریمه راهنمایی و رانندگی","بیمه پاسارگاد","سایر");
                            $billTypesEnglish = array("water", "electricity", "gas", "telephone", "cellphone", "mayoralty","","", "police","pasargad","others");
                            $billType = $result['products']['details']['billType'] - 1;
                            if($billType == -1){
                                $billCoNum = substr($result['products']['details']['billId'],strlen($result['products']['details']['billId'])-5,3);
                                if($billCoNum == 102){
                                    $billType = 9;
                                }else{
                                    $billType = 10;
                                }
                            }

                            ?>
				<div class="image"><img alt="تراکنش موفق" src="img/success.png"></div>
				<strong>تراکنش موفق</strong>
				
				<div class="response Bill">
					<table id="bill-info">
						<tbody>
							<tr>
								<td>نوع قبض</td>
								<td>
                                    <span id="type" class="bill <?php echo $billTypesEnglish[$billType]; ?>"></span>
                                    <span id="type-title"><?php echo $billTypesPersian[$billType]; ?></span>
                                </td>
							</tr>
							<tr>
								<td>تاریخ</td>
								<td><?php echo $result['date']; ?></td>
							</tr>
							<tr>
								<td>مبلغ قبض</td>
								<td><?php echo $result['products']['price'] . ' تومان'; ?></td>
							</tr>
							<tr>
								<td>شناسه قبض</td>
								<td><?php echo $result['products']['details']['billId']; ?></td>
							</tr>
							<tr>
								<td>شناسه پرداخت</td>
								<td><?php echo $result['products']['details']['paymentId']; ?></td>
							</tr>
							<tr>
								<td>کد پیگیری</td>
								<td><?php echo $result['refId']; ?></td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="back">
					<a href="<?php echo $root . '/index.php'; ?>"><input class="submit" type="submit" value="بازگشت به صفحه اصلی"></input></a>
				</div>
				
				
	 <?php
				} elseif ($transactionType == 'TopUp') {
					$operators = array('MCI' => 'همراه اول', 'MTN' => 'ایرانسل', 'RTL' => 'رایتل', 'TAL' => 'تالیا');
					$operator = explode('-', $result['products']['type']);
		?> 
				
				<div class="image"><img alt="تراکنش موفق" src="img/success.png"></div>
				<strong>تراکنش موفق</strong>
				<div class="response topup">
					<table>
						<tbody>
							<tr>
								<td>تاریخ</td>
								<td><?php echo $result['date']; ?></td>
							</tr>
							<tr>
								<td>مبلغ شارژ</td>
								<td><?php echo $result['products']['price'] . ' تومان'; ?></td>
							</tr>
							<tr>
								<td>اپراتور شارژ</td>
								<td><?php echo $operators[$operator[1]]; ?></td>
							</tr>
							<tr>
								<td>شماره تلفن همراه</td>
								<td><?php echo $result['products']['details']['cellphone']; ?></td>
							</tr>
							<tr>
								<td>کد پیگیری</td>
								<td><?php echo $result['refId']; ?></td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="back">
					<a href="<?php echo $root . '/index.php'; ?>"><input class="submit" type="submit" value="بازگشت به صفحه اصلی"></input></a>
				</div>
				
				
	<?php
				} elseif ($transactionType == 'IN') {
		?>
		
					<div class="image"><img alt="تراکنش موفق" src="img/success.png"></div>
					<strong>تراکنش موفق</strong>
					<div class="response intenetpackage">
						<table>
							<tbody>
								<tr>
									<td>تاریخ</td>
									<td><?php echo $result['date']; ?></td>
								</tr>
								<tr>
									<td>نام بسته</td>
									<td class="mw-200"><?php echo $result['products']['name']; ?></td>
								</tr>
								<tr>
									<td>مبلغ بسته</td>
									<td><?php echo $result['products']['price'] . ' تومان'; ?></td>
								</tr>
								<tr>
									<td>شماره تلفن همراه</td>
									<td><?php echo $result['products']['details']['cellphone']; ?></td>
								</tr>
								<tr>
									<td>کد پیگیری</td>
									<td><?php echo $result['refId']; ?></td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="back">
						<a href="<?php echo $root . '/index.php'; ?>"><input class="submit" type="submit" value="بازگشت به صفحه ی اصلی"></input></a>
					</div>
		<?php
			} elseif (in_array($transactionType, array('CC', 'GC', 'AN', 'TC'))) {
				$pinProductDescription = array(
					'CC' => 'اکنون با وارد کردن کد شارژ از طریق صفحه کلید گوشی، تلفن همراه خود را شارژ نمایید.',
					'GC' => 'با استفاده گیفت کارت خریداری شده می توانید از سرویس هایی همچون خرید نرم افزار، بازی، موسیقی، فیلم، کتاب و ... استفاده نمایید.',
					'TC' => 'رمز مجوز را با اعداد انگلیسی به شماره 20001888 پیامک نمایید. پس از دریافت پیامک اعلام اعتبار می توانید پلاک خودرو خود را مطابق روال پیامک کنید.<br>در صورتی که برای نخستین بار از مجوز روزانه استفاده می کنید با شماره ندای ترافیک 87500-021 تماس بگیرید.',
					'AN' => 'با وارد کردن رمز آنتی ویروس خود را فعال کنید.<br>جهت راهنمایی بیشتر به منوی «راهنما» مراجعه نمایید.'
				);
				$dataKeys = array('Serial' => 'سریال', 'Username' => 'نام کاربری', 'ExpireDate' => 'تاریخ انقضاء');
				$productCount = count($result['products']['details']);
		?>
					
					<div class="image"><img alt="تراکنش موفق" src="img/success.png"></div>
					<strong>تراکنش موفق</strong>
					<div id="description"><p><?php echo $pinProductDescription[$transactionType]; ?></p></div>
			<?php
					if ($productCount > 1) {
			?>
					
					<div class="response">
						<div class="products-info">
							<table style='border-bottom: 0'>
								<tr>
									<td>تاریخ</td>
									<td><?php echo $result['date']; ?></td>
								</tr>
								<tr>
									<td>کد پیگیری</td>
									<td><?php echo $result['refId']; ?></td>
								</tr>
								<tr>
									<td>قیمت واحد</td>
									<td><?php echo $result['products']['price']; ?> تومان</td>
								</tr>
								<tr>
									<td>تعداد</td>
									<td><?php echo $result['products']['count']; ?> عدد</td>
								</tr>
								<tr>
									<td  style='border-bottom: 0'>قیمت کل</td>
									<td  style='border-bottom: 0'><?php echo $result['products']['price'] * $result['products']['count']; ?> تومان</td>
								</tr  style='border-bottom: 0'>
								</table>
								<table>
								<thead>
									<th><?php if ($transactionType != 'AN') { echo 'رمز (پین)'; } else { echo 'پسورد'; }?></th>
								<?php
									foreach ($result['products']['details'][0] as $key => $value) {
										if ($key != 'pin') {
											if (array_key_exists(ucfirst($key), $dataKeys)) {
												echo '<th>' . $dataKeys[ucfirst($key)] . '</th>';
											} else {
												echo '<th>' . $key . '</th>';
											}
										}
									}
								?>
								</thead>
								<tbody>
								<?php 
									for ($i = 0; $i < $productCount; $i++) {
										echo '<tr>';
											foreach ($result['products']['details'][$i] as $key => $value) {
												echo '<td class="ltr">' . $value .'</td>';
											}
										echo '</tr>';
									}
								?>
								</tbody>
							</table>
						</div>
					</div>
					<div class="back">
						<a href="<?php echo $root . '/index.php'; ?>"><input class="submit" type="submit" value="بازگشت به صفحه اصلی"></input></a>
					</div>
			<?php
					} else {
						$operator = explode('-', $result['products']['type']);
						$registerPinCode = '';
						if (in_array($operator[1], array('MCI', 'TAL'))) {
							$registerPinCode = '#رمزشارژ#*140*';
						} elseif (in_array($operator[1], array('MTN', 'RTL'))) {
							$registerPinCode = '#رمزشارژ*141*';
						}
			?>
					
					<div class="response">
						<h2><?php echo $result['products']['name']; ?></h2>
						<table>
							<tbody>
								<tr>
									<td>تاریخ</td>
									<td><?php echo $result['date']; ?></td>
								</tr>
								<tr>
									<td>مبلغ</td>
									<td><?php echo $result['products']['price'] . ' تومان'; ?></td>
								</tr>
								<tr>
									<td><?php if ($transactionType != 'AN') { echo 'رمز (پین)'; } else { echo 'پسورد'; }?></td>
									<td class="ltr"><?php echo $result['products']['details'][0]['pin']; ?></td>
								</tr>
						<?php
							if (!empty($registerPinCode)) {
						?>
								<tr>
									<td>کد ورود شارژ</td>
									<td><?php echo $registerPinCode; ?></td>
								</tr>
						<?php
							}
								foreach ($result['products']['details'][0] as $key => $value) {
									if ($key != 'pin') {
										echo '<tr>';
										if (array_key_exists(ucfirst($key), $dataKeys)) {
											echo '<td>' . $dataKeys[ucfirst($key)] . '</td>';
										} else {
											echo '<td>' . $key . '</td>';
										}
										echo '<td class="ltr">' . $value . '</td>'
											.'</tr>';
									}
								}
						?>
								<tr>
									<td>کد پیگیری</td>
									<td><?php echo $result['refId']; ?></td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="back">
						<a href="<?php echo $root . '/index.php'; ?>"><input class="submit" type="submit" value="بازگشت به صفحه اصلی"></input></a>
					</div>
			<?php
					}
				}
			} else {
		?>
					
					<section class="error">
						<div class="image"><img alt="تراکنش ناموفق" src="img/error.png"></div>
						<strong>تراکنش ناموفق</strong>
						<p>چنانچه وجه از حساب شما کسر شده است، طی 72 ساعت کاری آینده از طرف بانک وجه به حساب شما باز می گردد.</p>
					</section>
					<div class="back">
						<a href="<?php echo $root . '/index.php'; ?>"><input class="submit-error" type="submit" value="بازگشت به صفحه اصلی"></input></a>
					</div>
			</div>
			<?php
			} 
			?>
		</div>
	</body>
</html>