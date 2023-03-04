document.addEventListener("DOMContentLoaded", main);

const mutationObserver = new MutationObserver(entries => {
    main();
});
var target_stl_side = document.querySelector("#stl_side");
var config = {attributes: true};
mutationObserver.observe(target_stl_side, config);

function main() {
    const script = document.createElement('script');
    script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
    
    document.head.append(script);
        script.onload = () => {
            feed_rows();
            page_wall_posts();

            if ($('#feed_rows').children().length > 0){
                const mutationObserver = new MutationObserver(entries => {
                    feed_rows()
                });
                var target_feed_row = document.querySelector("#feed_rows");
                var config = {childList: true};
                mutationObserver.observe(target_feed_row, config);
            }
            else if($('#page_wall_posts').children().length > 0){
                const mutationObserver = new MutationObserver(entries => {
                    page_wall_posts()
                });
                var target_page_wall_posts = document.querySelector("#page_wall_posts");
                var config = {childList: true};
                mutationObserver.observe(target_page_wall_posts, config);
            }

        }
    }
main();
