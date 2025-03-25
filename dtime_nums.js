function dtime_nums(offset) {
    const date = new Date();
    date.setDate(date.getDate() + offset);
    document.write(date.toLocaleDateString());
}

function timeAgo(inputDate) {
    let result = dateFns.formatDistanceToNow(inputDate, {
        locale: dateFns.locale.pl,
        addSuffix: true,
    });

    if (result.startsWith('dzień temu')) {
        return result.replace('dzień temu', 'wczoraj');
    }

    if (result.startsWith('2 dni')) {
        return result.replace('2 dni temu', 'przedwczoraj');
    }

    return result;
}

function renderFooterCurrentYear() {
    const yearDiv = document.querySelector('.footer__year');
    yearDiv.textContent = dateFns.getYear(new Date());
}

renderFooterCurrentYear();

function renderDate() {
    const date = document.getElementById('date');
    const nextWeek = dateFns.add(new Date(), { days: 7 });
    const formatedNextWeek = dateFns.format(nextWeek, 'dd-MM-yyyy');
    date.textContent = formatedNextWeek;
}

renderDate();

document.addEventListener('DOMContentLoaded', function () {
    const comments = document.querySelectorAll('.comment');
    comments.forEach((comment) => {
        const commentTime = new Date(comment.getAttribute('data-time'));
        const timeAgoElement = comment.querySelector('.comment__date');
        timeAgoElement.textContent = timeAgo(commentTime);
    });
});
