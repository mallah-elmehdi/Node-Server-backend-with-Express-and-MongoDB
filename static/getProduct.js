$(document).ready(() => {

    const updateProductShow = (data) => {
        $('#productShow').show()
        $('#productShow').empty()
        if (data.length) {
            data.forEach((item, i) => {
                $('#productShow').append(
                    `
                    <div class="col-lg-4 col-md-6">
                        <div class="card w-100 h-100">
                            <img src="${item.images[0]}" class="card-img-top" alt="${item.title}">
                            <div class="card-body">
                                <p class="card-title">${item.title}</p>
                                <p class="card-text">${item.description}</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><span class="badge rounded-pill bg-primary">price : ${item.price} $</span></li>
                                <li class="list-group-item"><span class="badge rounded-pill bg-primary">discountPercentage : ${item.discountPercentage} </span></li>
                                <li class="list-group-item"><span class="badge rounded-pill bg-primary">rating : ${item.rating} </span></li>
                                <li class="list-group-item"><span class="badge rounded-pill bg-primary">stock : ${item.stock} </span></li>
                                <li class="list-group-item"><span class="badge rounded-pill bg-primary">brand : ${item.brand} </span></li>
                                <li class="list-group-item"><span class="badge rounded-pill bg-primary">category : ${item.category} </span></li>
                            </ul>
                        </div>
                    </div>
                    `
                )
            });
        }
        else {
            $('#productShow').append('<div class="alert alert-secondary">no product has been found</div>')
        }
    }
    $('#subForm').submit((e) => {
        e.preventDefault()
        const keyword = $('input[name=keyword]').val();
        console.log(keyword);
        if (keyword) {
            $.ajax({
                url: '/',
                type: 'post',
                contentType: 'application/json',
                data: JSON.stringify({ keyword }),
                success: (data) => {
                    updateProductShow(data)
                }
            })
        }
    })
})
