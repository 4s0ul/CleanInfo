function feed_rows(){

    for (i = 0; i < $('#feed_rows').children('.feed_row').length; i++){
        if ($('#feed_rows').children('.feed_row').eq(i).find('.post_author').find('a.page_verified ').length == 0){
            $('#feed_rows').children('.feed_row').eq(i).find('.post_author').children('.author').css("background", "yellow");
            $('#feed_rows').children('.feed_row').eq(i).find('.post_author').children('.author').wrap('<span class="mytooltip" data-tooltip="Отсутствие верификации - один из признаков временных аккаунтов. Верифицированный аккаунт это подтвержденный аккаунт пользователя. Старайтесь получать информацию из верифицированных источников."></span>'); 
        }

        if ($('#feed_rows').children('.feed_row').eq(i).find('.post_image_stories').children('img').attr('src') == '/images/community_50.png' || $('#feed_rows').children('.feed_row').eq(i).find('.post_image_stories').children('img').attr('src') == '/images/community_100.png'){
            $('#feed_rows').children('.feed_row').eq(i).find('.post_image_stories').css("background", "yellow");
            $('#feed_rows').children('.feed_row').eq(i).find('.post_image_stories').wrap('<span class="mytooltip" data-tooltip="Аватар (imago) - графическое представление пользователя или сообщества. Отсутствие аватара или нечеткое изображение могут говорить о временном или бот-аккаунте."></span>');
        }

        $('#feed_rows').children('.feed_row').eq(i).find('.wall_text').css('z-index', '99');
    }
    
    $('#feed_rows').children('.feed_row').find('.wall_post_text').find('.emoji').css("background", "red");
    $('#feed_rows').children('.feed_row').find('.wall_post_text').find('.emoji').wrap('<span class="mytooltip_emoji" data-tooltip="Эмодзи - выражение эмоций на письме. Большое количество эмодзи может говорить о несоблюдении информационной гигиены и попытке привлечь внимание к новости. Эмодзи часто используют в рекламных объявлениях."></span>');

    $('#feed_rows').children('.feed_row').find('.wall_post_text').highlightCAPS(/[A-ZА-ЯЁ]{6,}/);

    $('#feed_rows').children('.feed_row').find('.wall_post_text').highlightPunctuation(/[?]{2,}/);
    $('#feed_rows').children('.feed_row').find('.wall_post_text').highlightPunctuation(/[!]{2,}/);
    $('#feed_rows').children('.feed_row').find('.wall_post_text').highlightPunctuation(/[>]{2,}/);
    $('#feed_rows').children('.feed_row').find('.wall_post_text').highlightPunctuation(/[<]{2,}/);
    $('#feed_rows').children('.feed_row').find('.wall_post_text').highlightPunctuation(/!\?/);
    $('#feed_rows').children('.feed_row').find('.wall_post_text').highlightPunctuation(/:\)/);
    $('#feed_rows').children('.feed_row').find('.wall_post_text').highlightPunctuation(/[)]{3,}/);
 }

function page_wall_posts(){

    for (i = 0; i < $('#page_wall_posts').children().length; i++){
        if ($('#page_wall_posts').children().eq(i).find('.post_author').find('a.page_verified ').length == 0){
            $('#page_wall_posts').children().eq(i).find('.post_author').children('.author').css("background", "yellow");
            $('#page_wall_posts').children().eq(i).find('.post_author').children('.author').wrap('<span class="mytooltip" data-tooltip="Отсутствие верификации - один из признаков временных аккаунтов. Верифицированный аккаунт это подтвержденный аккаунт пользователя. Старайтесь получать информацию из верифицированных источников."></span>');
        }

        if ($('#page_wall_posts').children().eq(i).find('.post_image_stories').children('img').attr('src') == '/images/community_50.png' || $('#page_wall_posts').children().eq(i).find('.post_image_stories').children('img').attr('src') == '/images/community_100.png'){
            $('#page_wall_posts').children().eq(i).find('.post_image_stories').css("background", "yellow");
            $('#page_wall_posts').children().eq(i).find('.post_image_stories').wrap('<span class="mytooltip" data-tooltip="Аватар (imago) - графическое представление пользователя или сообщества. Отсутствие аватара или нечеткое изображение могут говорить о временном или бот-аккаунте."></span>');
        }
        $('#page_wall_posts').children().eq(i).find('.wall_text').css('z-index', '99');
    }
    
    $('#page_wall_posts').children().find('.wall_post_text').find('.emoji').css("background", "red");
    $('#page_wall_posts').children().find('.wall_post_text').find('.emoji').wrap('<span class="mytooltip_emoji" data-tooltip="Эмодзи - выражение эмоций на письме. Большое количество эмодзи может говорить о несоблюдении информационной гигиены и попытке привлечь внимание к новости. Эмодзи часто используют в рекламных объявлениях."></span>');

    $('#page_wall_posts').children().find('.wall_post_text').highlightCAPS(/[A-ZА-ЯЁ]{6,}/); 

    $('#page_wall_posts').children().find('.wall_post_text').highlightPunctuation(/[?]{2,}/);
    $('#page_wall_posts').children().find('.wall_post_text').highlightPunctuation(/[!]{2,}/);
    $('#page_wall_posts').children().find('.wall_post_text').highlightPunctuation(/[>]{2,}/);
    $('#page_wall_posts').children().find('.wall_post_text').highlightPunctuation(/[<]{2,}/);
    $('#page_wall_posts').children().find('.wall_post_text').highlightPunctuation(/!\?/);
    $('#page_wall_posts').children().find('.wall_post_text').highlightPunctuation(/:\)/);
    $('#page_wall_posts').children().find('.wall_post_text').highlightPunctuation(/[)]{3,}/);
}

