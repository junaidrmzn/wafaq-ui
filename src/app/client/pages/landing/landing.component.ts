import { Component, OnInit } from '@angular/core';
import { Navigations } from 'src/app/shared/utils/navigations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  navOptions: any = Navigations.landingNav;

  objectives: any = [
    'مدارس اسلامیہ کو جدید طرز پر خدمت دین کے لئے رہنمائی فراہم کرنا',
    'مدارس اسلامیہ میں مدرسین علوم دینیہ کی کمی کو پورا کرنے کے لئے ایسے اقدامات کرنا جس سے نئے مدرسین علوم دینیہ کی ایک بڑی کھیپ تیار ہو اور اہلسنت کی نظریاتی حدود کا تحفظ ممکن ہو',
    'مدارس و جامعات کی احیاء حریتِ فکر کا تحفظ کرنا',
    'وفاق سے ملحقہ مدارس و جامعات کے لئے یکساں نصاب تعلیم کا تعین کرنا',
    // 'مدارس اسلامیہ کو عصرِ حاضر کے تقاضوں کے مطابق اپڈیٹ کرنا',
    // 'عالمی سطح پر مدارس اسلامیہ کے خلاف سازشوں کا تدارک کرنا اور اس کے لئے منصوبہ سازی کرنا',
    // 'ملک بھر میں زبوں حالی کا شکار مدارس اہل سنت بالخصوص بلوچستان، آزاد کشمیر، کے پی کے، اندرون سندھ اور جنوبی پنجاب میں مدارس اہل سنت کو اپ گریڈ کرنا',
    // 'گلگت،  بلتستان میں باقاعدہ طورپر مدارس اہل سنت قائم کرنا',
    // 'اسلام میں عورتوں کو دیئے گئے حقوق کو مد نظر رکھتے ہوئے ملک بھر میں مدارس اہل سنت (طالبات) میں کمپیوٹر کورسز، ٹیکنیکل کورسز، امور خانہ داری و دیگر مفید کورسز پر خصوصی توجہ دینا اور اس کے لئے ہنگامی اقدامات کرنا',
    // 'وفاق سے ملحقہ مدارس کو طے کردہ ضابطہ کے مطابق مالی معاونت فراہم کرنا',
    // 'وفاق سے ملحقہ مدارس سے فارغ التحصیل علماء و فضلاء کے لئے سرکاری و نجی اداروں میں ملازمت کے حصول کے لئے سعی کرنا',
    // 'وفاق سے ملحقہ مدارس سے فارغ التحصیل طلباء و طالبات کے لئے اعلیٰ تعلیم(ایم فل و پی ایچ ڈی) کے لئے اسکالر شپ کا اجراء کرنا اور بیرون ممالک حصول تعلیم کے لئے سعی کرنا',
    // 'وفاق سے ملحقہ مدارس کے اساتذہ کرام کے وقار کو ملحوظ خاطر رکھتے ہوئے قابل قدر وظیفہ کے لئے عملی اقدامات کرنا',
    // 'قومی و بین الاقوامی جامعات میں مدارس اہل سنت کے طلباء و طالبات کے لئے اعلیٰ تعلیم کے مواقع فراہم کرنے کی کوشش کرنا',
    // 'دنیا میں بڑھتے ہوئے اسلامو فوبیاکے خلاف مؤثرحکمت ِ عملی ترتیب دینا',
    // 'وفاق خالصتاً ایک تعلیمی و تحقیقی ادارہ ہو گا جو کہ مکمل طور پر غیر سیاسی ہو گا',
    // 'جدید تعلیمی اداروں اور مدارس اسلامیہ کے مابین بڑھتے ہوئے فاصلوں کو کم کرنے کے لئے عملی اقدامات کرنا',
    // 'واق سے ملحقہ مدارس میں بین المدارس مقابلہ جات برائے تلاوت، نعت شریف، تقریر، سپورٹس کے لئے اقدامات کرنا',
    // 'وفاق سے ملحقہ خواتین کے مدارس کے جملہ انتظام و انصرام کی بابت شعبہ خواتین قائم کرنا',
    // 'وفاق سے ملحقہ جملہ مدارس میں دہشتگردی کے تدارک، انتہا پسندی اور فرقہ واریت کے حوالے سے عملی اقدامات کرنا',
    // 'وفاق سے ملحقہ مدارس میں دو قومی نظریہ کی بقاء اور وطن عزیز کی نظریاتی اور جغرافیائی اساس سے وفاداری کا شعور پیدا کرنا',
    // '۔ وفاقی وزارت تعلیم و پیشہ ورانہ تربیت اور ہائیر ایجوکیشن کمیشن (HEC)کی مشاورت سے مدارس کے لئے تعلیمی پالیسیاں بنانا۔',
  ];

  backgroundAndHistory: any = [
    'وفاق المدارس الاسلامیہ الرضویہ پاکستان (المسجلۃ) اللہ تعالیٰ نے دین کی تبلیغ کے لئے روز اوّل سے تعلیم و تربیت کا سلسلہ جاری فرمایا اور اس کے لئے انبیاء و رسل کو مبعوث فرمایا اور آسمانی کتب و صحائف کو نازل فرمایا۔ سلسلہ نبوت کی خشت اول سیدنا حضرت آدمdہیں اور یہ سلسلہ امام المرسلین خاتم النبین حضرت محمد مصطفی aکی ذات بابرکات پر مکمل ہوا۔ آپ aکے ظاہری پردہ فرمانے کے بعد یہ ذمہ داری صحابہ کرامhنے سرانجام دی اور صحابہ کرام jکی تعلیم و تربیت کے لئے آقا کریمaنے خود مسجد نبوی میں پہلا مدرسہ صفہ کے نام سے قائم فرمایا جس میں اقامتی و غیراقامتی تشنگان علم کے لئے نظام موجود تھا۔ اسی مدرسہ صفہ کی روشن تاریخ کی مثالیں جامعہ نظامیہ (بغداد شریف)، جامعہ زیتونہ(مراکش)، جامعہ رضویہ منظر اسلام(بریلی شریف) اور جامعہ رضویہ مظہر اسلام(فیصل آباد) ہیں۔ مدرسہ صفہ کی روایت کو آگے بڑھاتے ہوئے عصرِ حاضر میں قدیم و جدید علوم کی ترویج و اشاعت کے لئے وفاق المدارس الاسلامیہ الرضویہ الباکستان کا قیام ۲۸جمادی الثانی ۱۴۴۲ہجری بمطابق۰ ۱ فروری۱ ۲۰۲ء کو عمل میں لایا گیا۔',
  ];

  mainNotification: string =
    'سالانہ امتحانات 2023 ء میں شرکت کے خواہشمند اُمیدوار حسبِ شیڈول داخلہ جمع کروا سکتے ہیں وفاق المدارس الاسلامیہ الرضویہ پاکستان  کے تحت  داخلہ بھیجنے والے طلبہ و طالبات کیلئے نظام الاوقات ایک ہی ہیں۔';

  notifications: any = [
    'امتحانی شیڈول سالانہ امتحانات 2023ء برائے طلبہ و طالبات',
    'وفاق المدارس اسلامیہ الرضویہ پاکستان کا فیس بک پیج',
    'بعض مدارس کے منتظمین رول نمبر سلپس وصول ہونے کے ساتھ ہی امیدواروں میں تقسیم کرنے کی بجائے امتحان شروع ہونے پر (آخری دن) تقسیم کرتے ہیں ۔ کیونکہ طلبہ و طالبات اپنی رول نمبر سلپ سنبھال کر نہیں رکھتے ، لہٰذا حفاظتی نقطہ نگاہ سے ایسا کیا جاتا ہے ۔ مشورہ دیا جاتا ہے کہ رول نمبر سلپ وصول ہوتے ہی امیدوار کو جاری کی جائے اور اسے اس کے مندرجات پڑھنے ، چیک کرنےاور ہدایات کو سمجھنے کے ساتھ ساتھ سنبھال کر رکھنے کی تاکید وہدایت کی جائے ۔ البتہ حفظ ماتقدم کے طور پر اس کی فوٹو کاپی کر کے امیدوار کے پاس بھی الگ سے محفوظ رکھنے کا کہا جائے اور دفتری ریکارڈ کے لئے بھی فوٹو کاپی کروا کر محفوظ کر لی جائے تاکہ بوقت ضرورت کام میں لائی جا سکے ۔ شعبہ تعلقات عامہ وفاق المدارس الاسلامیہ الرضویہ پاکستان',
  ];
  quickLinks: any = [
    {
      name: 'داخلہ فارم برائے طالبات (درجہ متوسطہ تاتخصص  )بابت سالانہ/ضمنی امتحان',
      path: 'https://drive.google.com/file/d/1CBxb7PAVC2yicSCuVOTb1Ps5NZJaMJwU/view?usp=sharing',
    },
    {
      name: 'داخلہ فارم برائےطلبہ (درجہ متوسطہ تا تخصص )بابت سالانہ/ضمنی امتحان',
      path: 'https://drive.google.com/file/d/1T9-DMgw-pO5E7CYDBvqi4i4DVtnE9Q3z/view?usp=sharing',
    },
    {
      name: 'پروفارمہ بابت امتحانات زیر تکمیل حفظ القرآن طلبہ و طالبات',
      path: 'https://drive.google.com/file/d/1LyIf7sTgdwd2R2PmQCJ0fsiJioTfLEdX/view?usp=sharing',
    },
    {
      name: 'پروفارمہ بابت امتحانات زیر تکمیل تجوید و قرأت طلبہ و طالبات',
      path: 'https://drive.google.com/file/d/1cs_tvtGn2axG7Kc9Wpk4PxVDmKbpPGBT/view?usp=sharing',
    },
    {
      name: 'داخلہ فارم تحفیظ القرآن',
      path: 'https://drive.google.com/file/d/1Rd5pbd5rsSSAg2b0lRnpnYanGi_TSuCy/view?usp=sharing',
    },
    {
      name: 'داخلہ فارم تجوید و قرأت',
      path: 'https://drive.google.com/file/d/1le2K0kOlVGQvK7mhOGsUYGRPnVi3vNfK/view?usp=sharing',
    },
    {
      name: 'نظام الاوقات وصولی داخلہ فارم بابت سالانہ امتحانات 2023ء برائے طالبات',
      path: 'https://drive.google.com/file/d/1GkQIFSmA7U__oDhPW7K6Srxr6CqDkl_t/view?usp=sharing',
    },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}
  navigate(route: string) {
    if (
      route === 'objectives' ||
      route === 'offices' ||
      route === 'background' ||
      route === 'contact-us'
    ) {
      if (this.router.url.slice(3) !== 'landing') {
        this.router.navigate(['/']);
      }
      this.scroll(route);
    } else {
      this.router.navigate([route]);
    }
  }
  scroll(el: string) {
    const ele: HTMLElement = document.getElementById(el) as HTMLElement;
    setTimeout(() => {
      ele.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  }
}
