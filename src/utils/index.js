//短信验证码倒计时
export const timeCountdown = obj => {
  //obj包括timer、waitTime 、canGet
  const TIME_COUNT = 60; //默认倒计时秒数
  if (!obj.timer) {
    obj.waitTime = TIME_COUNT;
    obj.canGet = false;
    obj.timer = setInterval(() => {
      if (obj.waitTime > 0 && obj.waitTime <= TIME_COUNT) {
        obj.waitTime--;
      } else {
        obj.canGet = true;
        clearInterval(obj.timer); //清空定时器
        obj.timer = null;
      }
    }, 1000);
  }
  return {
    timer: obj.timer,
    canGet: obj.canGet,
    waitTime: obj.waitTime
  };
};

export const checkPhone = value => {
  const reg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/;
  if (reg.test(value)) {
    return true;
  } else {
    return false;
  }
};
