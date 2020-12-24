import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';
AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList =[
        
        {
            id: 1,
            name: 'Nghệ sĩ của Năm',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/b/e/b/0/beb06722f4c9133a409b777fa8b048c5.jpg',
        },
        {
            id: 2,
            name: 'Phát hiện của năm',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/0/f/8/f/0f8faf41927749c9c6613bbf5d332898.jpg',
        },
        {
            id: 3,
            name: 'Nam ca sĩ được yêu thích',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/0/8/a/9/08a99ddd9145f93a02150b4066ccf27e.jpg',
        },
    ];
    return (
        <div>
            <h2>Zing Music Awards</h2>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;