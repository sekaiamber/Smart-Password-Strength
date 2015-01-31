$(document).ready(function(){
	var args = pwdPromptAgrs();
	args.target = $("#pp1");
	args.bind = $("#pwd1");
	args.onchange = pwdPromptChange;
	buildPwdPrompt(args);
});

function pwdPromptAgrs() {
	return {
		target : null,
		bind : null,
		span : null,
		onchange : function(){}
	};
};

function buildPwdPrompt(args) {
	var $rulur = $("<div class='pwd-prompt-rulur'></div>");
	var $text = $("<div class='pwd-prompt-text'></div>");
	var $span = $("<span class='pwd-prompt-span'></span>")
	var $this = args.target;
	var $pwd = $("<input type='text' class='pwd-prompt-input' >");
	args.bind.css('display', 'none');
	args.bind.after($pwd);
	args.span = $span;
	$this.append($span).append($rulur).append($text);

	$pwd.keyup(function(e){
		$span.html($(this).val());
		args.bind.val($(this).val());
		args.onchange($(this).val().length, args);
	});
	args.bind.keyup(function(e){
		$span.html($(this).val());
		$pwd.val($(this).val());
		args.onchange($(this).val().length, args);
	});
};

function pwdPromptChange(i, args) {
	var $target = args.target;
	if (i == 0) {
		$target.css('display', 'none');
		return;
	} else {
		$target.css('display', 'block');
	};
	var $text = $(".pwd-prompt-text", $target).first();
	var $rulur = $(".pwd-prompt-rulur", $target).first();
	$rulur.width(args.span.innerWidth() - 4);
	$text.empty();
	$text.append(getPromptDiv1(i));
};

var promptArr1 = [
	'', 
	'<0.00001 秒', 
	'<0.00001 秒', 
	'<0.00001 秒', 
	'0.0001 秒',
	'0.09 秒',
	'14 秒',
	'14 分钟',
	'15 小时',
	'39 天',
	'6 年',
	'4000 年',
	'4,000,000 年',
	'465,000,000 年',
	'44,000,000,000 年',
	'4,000,000,000,000 年',
	'39,000,000,000,000,000 年',
	'3,000,000,000,000,000,000 年',
	'364,000,000,000,000,000,000 年',
	'35,000,000,000,000,000,000,000 年'
];

var promptEx1 = [
	'', 
	'几乎是一瞬间', 
	'几乎是一瞬间', 
	'几乎是一瞬间', 
	'几乎是一瞬间',
	'几乎是一瞬间',
	'倒杯水的时间',
	'一盏茶的时间',
	'从上海飞到巴黎的时间',
	'1个多月',
	'小孩子已经上幼儿园咯',
	'夏朝到现在的时间',
	'人类进化到现在的时间',
	'陆地上有动物到现在的时间',
	'宇宙大概14,000,000,000岁',
	'放心吧，这密码绝对破不了',
	'放心吧，这密码绝对破不了',
	'放心吧，这密码绝对破不了',
	'放心吧，这密码绝对破不了',
	'放心吧，这密码绝对破不了'
];

function getPromptDiv1(i) {
	var $div = $("<div><div class='gpd1-1'>破解此密码需要：</div><div class='gpd1-2 lv"+i+"'>"+promptArr1[i]+"</div><div class='gpd1-3'>"+promptEx1[i]+"</div></div>");
	return $div;
};