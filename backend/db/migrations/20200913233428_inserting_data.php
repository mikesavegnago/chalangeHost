<?php
declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class InsertingData extends AbstractMigration
{
    /**
     * Up Method.
     *
     * @return void
     */
    public function up(): void
    {
        $rows = [];

        $rows[] = [
            'id' => 5,
            'name' => 'Plano P',
        ];

        $rows[] = [
            'id' => 6,
            'name' => 'Plano M',
        ];

        $rows[] = [
            'id' => 7,
            'name' => 'Plano Business',
        ];

        $rows[] = [
            'id' => 329,
            'name' => 'Empreendedor',
        ];

        $rows[] = [
            'id' => 332,
            'name' => 'Negócios',
        ];

        $rows[] = [
            'id' => 335,
            'name' => 'Plano Turbo',
        ];

        $rows[] = [
            'id' => 341,
            'name' => 'Presença Digital',
        ];

        $this->table('products')->insert($rows)->save();

        $cycles = [];

        $cycles[] = [
            'type' => 'monthly',
            'price_renew' => 24.19,
            'price_order' => 24.19,
            'months' => 1,
            'product' => 5
        ];

        $cycles[] = [
            'type' => 'semiannually',
            'price_renew' => 128.34,
            'price_order' => 128.34,
            'months' => 6,
            'product' => 5
        ];

        $cycles[] = [
            'type' => 'biennially',
            'price_renew' => 393.36,
            'price_order' => 393.36,
            'months' => 24,
            'product' => 5
        ];

        $cycles[] = [
            'type' => 'triennially',
            'price_renew' => 561.13,
            'price_order' => 561.13,
            'months' => 36,
            'product' => 5
        ];

        $cycles[] = [
            'type' => 'quarterly',
            'price_renew' => 67.17,
            'price_order' => 67.17,
            'months' => 3,
            'product' => 5
        ];

        $cycles[] = [
            'type' => 'annually',
            'price_renew' => 220.66,
            'price_order' => 220.66,
            'months' => 12,
            'product' => 5
        ];

        $cycles[] = [
            'type' => 'monthly',
            'price_renew' => 29.69,
            'price_order' => 29.69,
            'months' => 1,
            'product' => 6
        ];

        $cycles[] = [
            'type' => 'semiannually',
            'price_renew' => 159.54,
            'price_order' => 159.54,
            'months' => 6,
            'product' => 6
        ];

        $cycles[] = [
            'type' => 'biennially',
            'price_renew' => 532.56,
            'price_order' => 532.56,
            'months' => 24,
            'product' => 6
        ];

        $cycles[] = [
            'type' => 'triennially',
            'price_renew' => 764.22,
            'price_order' => 764.22,
            'months' => 36,
            'product' => 6
        ];

        $cycles[] = [
            'type' => 'quarterly',
            'price_renew' => 82.77,
            'price_order' => 82.77,
            'months' => 3,
            'product' => 6
        ];

        $cycles[] = [
            'type' => 'annually',
            'price_renew' => 286.66,
            'price_order' => 286.66,
            'months' => 12,
            'product' => 6
        ];

        $cycles[] = [
            'type' => 'monthly',
            'price_renew' => 44.99,
            'price_order' => 44.99,
            'months' => 1,
            'product' => 7
        ];

        $cycles[] = [
            'type' => 'semiannually',
            'price_renew' => 257.94,
            'price_order' => 257.94,
            'months' => 6,
            'product' => 7
        ];

        $cycles[] = [
            'type' => 'biennially',
            'price_renew' => 983.76,
            'price_order' => 983.76,
            'months' => 24,
            'product' => 7
        ];

        $cycles[] = [
            'type' => 'triennially',
            'price_renew' => 1439.64,
            'price_order' => 1439.64,
            'months' => 36,
            'product' => 7
        ];

        $cycles[] = [
            'type' => 'quarterly',
            'price_renew' => 131.97,
            'price_order' => 131.97,
            'months' => 3,
            'product' => 7
        ];

        $cycles[] = [
            'type' => 'annually',
            'price_renew' => 503.88,
            'price_order' => 503.88,
            'months' => 12,
            'product' => 7
        ];

        $cycles[] = [
            'type' => 'monthly',
            'price_renew' => 47.24,
            'price_order' => 47.24,
            'months' => 1,
            'product' => 335
        ];

        $cycles[] = [
            'type' => 'semiannually',
            'price_renew' => 270.84,
            'price_order' => 270.84,
            'months' => 6,
            'product' => 335
        ];

        $cycles[] = [
            'type' => 'biennially',
            'price_renew' => 1032.95,
            'price_order' => 1032.95,
            'months' => 24,
            'product' => 335
        ];

        $cycles[] = [
            'type' => 'triennially',
            'price_renew' => 1511.62,
            'price_order' => 1511.62,
            'months' => 36,
            'product' => 335
        ];

        $cycles[] = [
            'type' => 'quarterly',
            'price_renew' => 138.57,
            'price_order' => 138.57,
            'months' => 3,
            'product' => 335
        ];

        $cycles[] = [
            'type' => 'annually',
            'price_renew' => 529.07,
            'price_order' => 529.07,
            'months' => 12,
            'product' => 335
        ];

        $cycles[] = [
            'type' => 'monthly',
            'price_renew' => 14.99,
            'price_order' => 14.99,
            'months' => 1,
            'product' => 341
        ];

        $this->table('cycles')->insert($cycles)->save();
    }
}
