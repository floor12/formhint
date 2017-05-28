<?php
/**
 * Created by PhpStorm.
 * User: floor12
 * Date: 28.05.2017
 * Time: 9:34
 */

namespace floor12\formhint;

use yii\web\AssetBundle;

class FormHintAsset extends AssetBundle
{

    public $sourcePath = '@vendor/floor12/yii2-formhint/assets/';
    public $css = [
        'form.hint.css'
    ];
    public $js = [
        'form.hint.js'
    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\jui\JuiAsset',
    ];

}
