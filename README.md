# angular-redactor

### 文件管理
    fileUpload: '/upload.php',
    fileManagerJson: '/files/files.json',

    [
        { "title": "Some Image", "name": "1.jpg", "link": "/images/1.jpg", "size": "301Kb"  },
        { "title": "My Book", "name": "my-book.pdf", "link": "/files/my-book.pdf", "size": "1MB"  }
    ]

### 图片管理数据格式 和设置
        {
            imageUpload: '/upload.php',
            imageManagerJson: '/images/images.json',
            plugins: ['imagemanager']
        }

        [
            { "thumb": "1m.jpg", "image": "1.jpg", "title": "Image 1"  },
            { "thumb": "2m.jpg", "image": "2.jpg", "title": "Image 2"  }
        ]

### Limiter

    limiter: 20, // number of characters
    plugins: ['limiter']

### counter

    counterCallback: function(data)
    {
        console.log('Words: ' + data.words);
        console.log('Characters: ' + data.characters);
        console.log('Characters w/o spaces: ' + (data.characters - data.spaces));
    }

