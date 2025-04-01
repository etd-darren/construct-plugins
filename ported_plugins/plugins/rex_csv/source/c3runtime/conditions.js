"use strict";

{
	const C3 = globalThis.C3;
	
	C3.Plugins.Rex_CSV.Cnds =
	{
		ForEachCol()
		{
	        this.currentTable.ForEachCol();
			return false;
		},    

		ForEachRowInCol(col)
		{
	        this.currentTable.ForEachRowInCol(col);
			return false;
		}, 
	    
		ForEachPage()
		{   
			this.forPage = "";
	        var tables = this.tables;
	        var page;

			const loopCtx = this.runtime.sdk.createLoopingConditionContext();
			for (page in tables)
			{
	            this.forPage = page;
	            this.TurnPage(page);
				loopCtx.retrigger();

				if (loopCtx.isStopped)
					break;
			}
			loopCtx.release();
			this.forPage = "";
			return false;        
		},    
	    
		ForEachRow()
		{
	        this.currentTable.ForEachRow();
			return false;
		},    

		ForEachColInRow(row)
		{
	        this.currentTable.ForEachColInRow(row);
			return false;
		}, 	

		IsDataInCol(data, col_name)
		{
			if (!(this.currentTable.keys.indexOf(col_name) != (-1)))
			    return false;    
		    var table = this.currentTable.table;
		    var col_data = table[col_name], row_name;
			var matched = false;
			for (row_name in col_data)
			{
			    if (col_data[row_name] == data)
				{
				    matched = true;
					break;
				}
			}
			return matched;
		}, 

		IsDataInRow(data, row_name)
		{
			if (!(this.currentTable.items.indexOf(row_name) != (-1)))
			    return false;    
		    var table = this.currentTable.table;
		    var col_name;
			var matched = false;
			for (col_name in table)
			{
			    if (table[col_name][row_name] == data)
				{
				    matched = true;
					break;
				}
			}
			return matched;
		},

		IsKeyInCol(key)
		{
	        return (this.currentTable.keys.indexOf(key) != (-1));     
		},
	    // cf_deprecated

	    // cf_deprecated    
		IsKeyInRow(key)
		{
	        return (this.currentTable.items.indexOf(key) != (-1));
		},
	    // cf_deprecated    

		IsCellValid(col, row)
		{
	        return ((this.currentTable.keys.indexOf(col) != (-1)) && 
	                (this.currentTable.items.indexOf(row) != (-1))   );
		},	

		HasCol(col)
		{
	        return (this.currentTable.keys.indexOf(col) != (-1));
		},	    

		HasRow(row)
		{
	        return (this.currentTable.items.indexOf(row) != (-1));
		} 
	};
}