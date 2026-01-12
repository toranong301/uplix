import { BuConfig } from './bu.types';

export const BU: Record<string, BuConfig> = {
  'firefighting-training': {
    key: 'firefighting-training',
    title: 'Firefighting Training',
    tagline: 'ฝึกอบรมดับเพลิง/อพยพ/ความปลอดภัย พร้อม In-house และตารางอบรม',
    heroImage: 'assets/hero/firefighting.jpg',
    primaryCta: { label: 'เช็คตารางอบรม', link: '/quote?bu=firefighting-training' },
    secondaryCta: { label: 'ขอทีมไปอบรม In-house', link: '/quote?bu=firefighting-training&mode=inhouse' },
    painSolutions: [
      { title: 'เพิ่มความพร้อมของทีม', desc: 'ฝึกจริง-ใช้งานจริง ลดความเสี่ยงหน้างาน' },
      { title: 'สอดคล้องข้อกำหนด', desc: 'จัดชุดคอร์ส/เอกสารประกอบให้ตรวจได้' },
      { title: 'วัดผลได้', desc: 'มีแนวทางประเมินก่อน-หลังอบรม' },
    ],
    previewItems: [
      { title: 'Basic Firefighting', desc: 'พื้นฐานดับเพลิง + อุปกรณ์', link: '/quote?course=basic-firefighting' },
      { title: 'Evacuation Drill', desc: 'ซ้อมอพยพตามแผน', link: '/quote?course=evacuation' },
      { title: 'Fire Warden', desc: 'หัวหน้าประจำชั้น/พื้นที่', link: '/quote?course=warden' },
    ],
    process: [
      { title: 'เก็บข้อมูลหน้างาน', desc: 'ประเภทพื้นที่/จำนวนคน/ความเสี่ยง' },
      { title: 'ออกแบบหลักสูตร', desc: 'เนื้อหา + station ฝึก' },
      { title: 'ฝึกอบรม', desc: 'Theory + Practical' },
      { title: 'สรุปผล', desc: 'รายงาน/ข้อเสนอแนะ' },
    ],
    faqs: [
      { q: 'รับอบรม In-house ไหม?', a: 'รับ ทั้งในโรงงาน/ออฟฟิศ และจัดอุปกรณ์ประกอบได้' },
      { q: 'มีใบประกาศไหม?', a: 'มีตามรูปแบบคอร์สที่เลือก' },
    ]
  },

  'ppe': {
    key: 'ppe',
    title: 'PPE',
    tagline: 'อุปกรณ์เซฟตี้ครบหมวด พร้อมแนะนำรุ่นให้เหมาะกับงาน',
    heroImage: 'assets/hero/ppe.jpg',
    primaryCta: { label: 'ขอใบเสนอราคา', link: '/quote', queryParams: { bu: 'ppe' } },
    secondaryCta: {
  label: 'ดาวน์โหลด Catalog',
  link: '/downloads/2025-PPE-Catalogue-UPLIX-Safety.pdf'
}
,
    painSolutions: [
      { title: 'เลือกให้ตรงงาน', desc: 'ลดการซื้อผิดรุ่น/ผิดมาตรฐาน' },
      { title: 'คุมงบง่าย', desc: 'จัดชุดแพ็กเกจตามหน่วยงาน/ไซต์งาน' },
      { title: 'ส่งไว/มีสต็อก', desc: 'ประสานการจัดส่งและใบเสนอราคา' },
    ],
    previewItems: [
      { title: 'Head Protection', desc: 'หมวกนิรภัย', link: '/quote?cat=head' },
      { title: 'Hand Protection', desc: 'ถุงมือ', link: '/quote?cat=hand' },
      { title: 'Respirator', desc: 'หน้ากาก/ตลับกรอง', link: '/quote?cat=respirator' },
    ],
    process: [
      { title: 'บอกประเภทงาน', desc: 'สารเคมี/ฝุ่น/งานสูง/ความร้อน ฯลฯ' },
      { title: 'คัดรุ่นที่เหมาะ', desc: 'เสนอ 2-3 ตัวเลือก' },
      { title: 'เสนอราคา', desc: 'พร้อม lead time' },
      { title: 'จัดส่ง', desc: 'ออกเอกสารครบ' },
    ],
    faqs: [
      { q: 'ช่วยแนะนำรุ่นได้ไหม?', a: 'ได้ ส่งรูปงาน/ความเสี่ยง/จำนวนใช้งาน' },
    ]
  },

  'hrd': {
    key: 'hrd',
    title: 'HRD',
    tagline: 'พัฒนาคนและองค์กร: โปรแกรมอบรม/โค้ช/ประเมินสมรรถนะ',
    heroImage: 'assets/hero/hrd.jpg',
    primaryCta: { label: 'นัดคุยที่ปรึกษา', link: '/quote?bu=hrd' },
    secondaryCta: { label: 'ดูโปรแกรม', link: '/bu/hrd' },
    painSolutions: [
      { title: 'Upskill/Reskill', desc: 'ออกแบบตามเป้าหมายองค์กร' },
      { title: 'วัดผลได้', desc: 'มีกรอบประเมินและ KPI' },
      { title: 'ต่อยอดเป็นแผนปี', desc: 'Roadmap การพัฒนา' },
    ],
    previewItems: [
      { title: 'Leadership Program', desc: 'พัฒนาผู้นำ', link: '/quote?program=leadership' },
      { title: 'Soft Skills', desc: 'สื่อสาร/ทำงานเป็นทีม', link: '/quote?program=softskills' },
      { title: 'Competency Assessment', desc: 'ประเมินสมรรถนะ', link: '/quote?program=assessment' },
    ],
    process: [
      { title: 'Pre-assessment', desc: 'เป้าหมาย/ช่องว่างทักษะ' },
      { title: 'ออกแบบโปรแกรม', desc: 'โครงหลักสูตร/กิจกรรม' },
      { title: 'ดำเนินการ', desc: 'อบรม/โค้ช/เวิร์กชอป' },
      { title: 'สรุปผล', desc: 'แผนต่อยอด' },
    ],
    faqs: [
      { q: 'ทำได้ทั้ง In-house และ Public ไหม?', a: 'ทำได้ ตามรูปแบบโปรแกรม' },
    ]
  },

  'waste-management': {
    key: 'waste-management',
    title: 'Waste Management',
    tagline: 'บริหารจัดการของเสีย/ตรวจหน้างาน/จัดทำแผนและบริการต่อเนื่อง',
    heroImage: 'assets/hero/waste.jpg',
    primaryCta: { label: 'นัดตรวจหน้างาน (Site Survey)', link: '/quote?bu=waste-management&mode=survey' },
    secondaryCta: { label: 'ดูแพ็กเกจบริการ', link: '/bu/waste-management' },
    painSolutions: [
      { title: 'ลดความเสี่ยงด้านกฎหมาย', desc: 'ช่วยจัดระบบเอกสารและกระบวนการ' },
      { title: 'คุมต้นทุน', desc: 'แยกประเภท/ปรับวิธีจัดเก็บ/ส่งกำจัด' },
      { title: 'ทำให้ตรวจได้', desc: 'ทำ SOP/Checklist/Training' },
    ],
    previewItems: [
      { title: 'Waste Audit', desc: 'สำรวจและวิเคราะห์ของเสีย', link: '/quote?service=audit' },
      { title: 'Waste Segregation Plan', desc: 'แผนแยกของเสีย', link: '/quote?service=plan' },
      { title: 'On-going Service', desc: 'ติดตามรายเดือน/ไตรมาส', link: '/quote?service=ongoing' },
    ],
    process: [
      { title: 'Site Survey', desc: 'เก็บข้อมูลจริงหน้างาน' },
      { title: 'วิเคราะห์ & ออกแบบระบบ', desc: 'ประเภท/จุดกำเนิด/การจัดเก็บ' },
      { title: 'นำไปใช้', desc: 'SOP + Training' },
      { title: 'ติดตามผล', desc: 'รายงานและปรับปรุง' },
    ],
    faqs: [
      { q: 'ต้องเตรียมอะไรตอนสำรวจ?', a: 'แปลนพื้นที่/รูปหน้างาน/ข้อมูลการกำจัดที่ใช้อยู่' },
    ]
  }
};
