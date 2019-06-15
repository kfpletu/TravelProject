var yz_str = ".j_yz_bt,.j_yz_mobile,.j_yz_num,.j_yz_size,.j_yz_yzm,.j_yz_card,.j_yz_maxint";
        var uid = '0';
        uid = parseInt(uid);
        var realName = '';
        $(function () {
            $('.operate_num s.add').click(function () {
                var th = $(this);
                var maxamt = th.attr('maxamt');
                if (th.hasClass('disabled') && $('#tickit_num').val() >= maxamt) {
                    $('#tickit_num').val($('#tickit_num').val() - 1)
                }
                setTimeout(function () {
                    th.next('.diy_error').remove();
                    if ($('#tickit_num').val() >= maxamt) {
                        $('#tickit_num').val(maxamt);
                        th.addClass('disabled');
                        th.after('<font class="diy_error">1张起订，最多可预订' + maxamt + '张</font>');
                    }
                }, 10)
            });
            $('.operate_num s.sub,.operate_num s.add').click(function () {
                setTimeout(function () {
                    var num = $('#tickit_num').val();
                    $('#popleNum').html(num);
                    if (realName == 1) {
                        if ($('#inputAdd' + num).length == 0 && num != 1) {
                            var h = $('.inputHtmlList').html();
                            for (var i = 2; i <= num; i++) {
                                if ($('#inputAdd' + i).length == 0) {
                                    var str = h.replace(/\*id\*/g, i);
                                    $('#inputAddTxt').append(str);
                                }
                            }
                        } else if (num > 1) {
                            $('.form_con .inputAdd:gt(' + (num - 2) + ')').remove();
                        } else {
                            $('.form_con .inputAdd').remove();
                        }
                    }
                }, 20);
                $(this).nextAll('.diy_error').remove();
            });
            $('#tickit_num').blur(function () {
                $('#popleNum').html($('#tickit_num').val());
            });
            $('.j_submit').click(function () {
                $('.form_con').find(yz_str).blur();
                var minamt = $('.operate_num s.sub').attr('minamt'),
                    tickit_num = $('#tickit_num').val();
                if (minamt > 1) {
                    if (minamt > tickit_num) {
                        layer.msg('门票数量' + minamt + '人起订', {
                            icon: 5
                        });
                        return false;
                    }
                }
                var errorIs = $('[error="true"]:eq(0)');
                if (errorIs.length != 0) {
                    errorIs.focus();
                    return false;
                }
                return true;
            });
            $('body').on('blur', yz_str, function () {
                var th = $(this);
                var thval = th.val();
                var tsStr = undefined;
                th.attr('error', 'false').nextAll('.diy_error').remove();
                if (th.hasClass('j_yz_size') && thval.length > th.data('max_size')) {
                    tsStr = '最多只能输入' + (th.data('max_size')) + '位有效位数';
                } else if (th.hasClass('j_yz_decimal') && (thval.indexOf(".") != -1) && thval.substring(
                        thval.indexOf(".") + 1, thval.length).length > th.data('decimal_size')) {
                    tsStr = '只能填写' + (th.data('decimal_size')) + '位小数';
                } else if (th.hasClass('j_yz_bt') && $.trim(thval) == '') {
                    /*必填*/
                    tsStr = th.data('bt');
                } else if (th.hasClass('j_yz_mobile') && $.trim(thval) != '' && !checkMobile(thval)) {
                    /*手机号*/
                    tsStr = th.data('mobile');
                } else if (th.hasClass('j_yz_num') && !checkRate(thval)) {
                    /*请输入数字,money*/
                    tsStr = th.data('num');
                } else if (th.hasClass('j_yz_card') && !IdentityCodeValid($.trim(thval))) {
                    /*身份证号*/
                    tsStr = th.data('card');
                } else if (th.hasClass('j_yz_maxint') && thval > th.data('maxint_size')) {
                    tsStr = th.data('maxint');
                }
                if (tsStr != undefined) {
                    var tsSpan = th.attr('error', 'true');
                    if (th.nextAll('.ts').length != 0) tsSpan = th.nextAll('.ts');
                    tsSpan.after('<span class="diy_error">' + tsStr + '</span>');
                }
            });
        });

        function loginShow() {
            $(".couponPopu, .popuBlack").fadeIn();
        };

        function loginHide() {
            $(".couponPopu, .popuBlack").fadeOut();
        };
        $(function () {
            $(".yz_title").find("input[type='radio']").change(function () {
                var _index = $(this).index("input[type='radio']");
                if (_index == 0) {
                    loginShow();
                }
            });
            $(".couponSelect").change(function () {
                selectPrice();
                couponCheck();
            });
            $(".couponBox").change(function () {
                couponCheck();
            });
            $(".noPwd").focus(function () {
                $(this).hide();
                $(".relPwd").show().focus();
            });
            $(".relPwd").blur(function () {
                if (this.value == '') {
                    $(this).hide();
                    $(".noPwd").show();
                }
            });
            $(".inputText").focus(function () {
                if (this.value == "请输入用户名") {
                    this.value = '';
                }
            }).blur(function () {
                if (this.value == '') {
                    this.value = "请输入用户名";
                }
            });
            $(".couponPopuClose, .popuBlack").click(function () {
                loginHide();
                $("input[type='radio']").prop("checked", true);
            });
            $(".oldUserLogin").click(function () {
                loginShow();
            })
        });
        var t, time = 60,
            b = 1;

        function yzm() {
            time--;
            clearInterval(t);
            t = setInterval(yzm, 1000);
            $(".yz_haoma").find("a").text(time + "秒后重新获取");
            if (time < 1) {
                clearInterval(t);
                $(".yz_haoma").find("a").text("免费获取验证码");
                time = 60;
                b = 1;
            }
        }

        function check_yz() {
            if (b) {
                var mobile = $('[name="link_phone"]').val();
                if (/^1[3456789]{1}[\d]{9}$/.test(mobile)) {
                    var url = "/mobile_check.php?action=code&mobile=" + mobile;
                    $.get(url, function (data) {
                        if (data == 'succeed') {
                            yzm();
                        } else {
                            $(".time_trips").text(data).show();
                            return false;
                        }
                    });
                } else {
                    $("#mobiletel_dl").find(".new_trips").show();
                    return false;
                }
            }
            b = 0;
        }
        $(function () {
            $('[name="link_phone"]').blur(function () {
                if ($(this).attr('error') == 'true') {
                    $('#mobiletel_yz').hide();
                } else {
                    if (uid == 0) {
                        $('#mobiletel_yz').show();
                    }
                }
            });
        });

        function check_code(obj) {
            var mobiletel = $('[name="link_phone"]').val();
            var checkcode = $('#checkcode').val();
            if (mobiletel != '' && checkcode != '') {
                var url = "/mobile_check.php?action=checkcode&mobiletel=" + mobiletel + "&checkcode=" + checkcode;
                $.get(url, function (data) {
                    if (data == 'succeed') {
                        $(".time_trips").hide();
                    } else {
                        $(".time_trips").text(data).show();
                        return false;
                    }
                });
            };
        }