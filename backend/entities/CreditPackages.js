/**
 * 堂數方案資料表
 *
 * 位元欄說明：
 * - id: 方案編號（UUID）
 * - 名稱：方案名稱
 * - Credit_amount: 包含堂數
 * - 價格: 方案價格
 * - 建立時間：建立時間
 */

const { EntitySchema } = require('typeorm')

module.exports = new EntitySchema({
  name: 'CreditPackage',
  tableName: 'CREDIT_PACKAGE',
  columns: {
    id: {
      primary: true,
      type: 'uuid',
      generated: 'uuid',
      nullable: false
    },
    name: {
      type: 'varchar',
      length: 50,
      nullable: false,
      unique: true
    },
    credit_amount: {
      type: 'integer',
      nullable: false
    },
    price: {
      type: 'numeric',
      precision: 10,
      scale: 2,
      nullable: false
    },
    createdAt: {
      type: 'timestamp',
      createDate: true,
      name: 'created_at',
      nullable: false
    }
  }
})
