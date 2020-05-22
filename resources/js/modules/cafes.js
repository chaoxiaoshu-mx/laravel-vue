/*
|-------------------------------------------------------------------------------
| VUEX modules/cafes.js
|-------------------------------------------------------------------------------
| The Vuex data store for the cafes
*/

import CafeAPI from '../api/cafe.js';

export const cafes = {
	state: {
		cafes: [],
		cafesLoadStatus: 0,

		cafe: {},
		cafeLoadStatus: 0,

		cafeAddStatus: 0
	},

	actions: {
        loadCafes( { commit } ){
        	commit( 'setCafesLoadStatus', 1 );

	        CafeAPI.getCafes()
	            .then( function( response ){
	                commit( 'setCafes', response.data );
	                commit( 'setCafesLoadStatus', 2 );
	            })
	            .catch( function(){
	                commit( 'setCafes', [] );
	                commit( 'setCafesLoadStatus', 3 );
	            });
        },
        loadCafe( { commit }, data ){
        	commit( 'setCafeLoadStatus', 1 );

	        CafeAPI.getCafe( data.id )
	            .then( function( response ){
	                commit( 'setCafe', response.data );
	                commit( 'setCafeLoadStatus', 2 );
	            })
	            .catch( function(){
	                commit( 'setCafe', {} );
	                commit( 'setCafeLoadStatus', 3 );
	            });
        },
        addCafe( {commit, state, dispatch}, data ) {
        	// 状态1标识开始添加
        	commit( 'setCafeAddStatus', 1);

        	CafeAPI.postAddNewCafe(data.name, data.locations, data.website, data.description, data.roaster)
        		.then( function( response){
        			// 状态2表示添加成功
        			commit( 'setCafeAddStatus', 2);
        			dispatch( 'loadCafes' );
        		})
        		.catch( function() {
        			// 状态3表示添加失败
        			commit( 'setCafeAddStatus', 3 );
        		});
        }
    },

    mutations: {
	    setCafesLoadStatus( state, status ){
	    	state.cafesLoadStatus = status;
	    },

	    setCafes( state, cafes ){
	    	state.cafes = cafes;
	    },

	    setCafeLoadStatus( state, status ){
	    	state.CafeLoadStatus = status;
	    },

	    setCafe( state, cafe ){
	    	state.cafe = cafe;
	    },
	    setCafeAddStatus(state, status) {
	    	state.cafeAddStatus = status;
	    }
	},

	getters: {
	    getCafesLoadStatus( state ){
	      return state.cafesLoadStatus;
	    },

	    getCafes( state ){
	      return state.cafes;
	    },

	    getCafeLoadStatus( state ){
	      return state.cafeLoadStatus;
	    },

	    getCafe( state ){
	      return state.cafe;
	    },

	    getCafeAddStatus( state ) {
	    	return state.cafeAddStatus;
	    }
	}
}