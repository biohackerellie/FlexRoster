package cmd

import (
	"github.com/spf13/cobra"
)

var createCmd = &cobra.Command{
	Use:   "create",
	Short: "Create a new resource",
	Long:  ".",

	Run: func(cmd *cobra.Command, args []string) {
		// Do stuff
	},
}
